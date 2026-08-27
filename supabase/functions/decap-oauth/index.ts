// GitHub OAuth handler for the Decap CMS admin at /admin.
//
// Decap opens `<base_url>/<auth_endpoint>` in a popup; GitHub redirects back to
// `<base_url>/callback`, where we exchange the code for an access token and
// postMessage it to the opener window in the format Decap expects.
//
// Writes are additionally restricted to an allow-list of GitHub logins below.
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

// Only these GitHub accounts may sign in to /admin. Add Salo's login here.
const ALLOWED_LOGINS = ['heyflouai'];

const CLIENT_ID = Deno.env.get('GITHUB_OAUTH_CLIENT_ID');
const CLIENT_SECRET = Deno.env.get('GITHUB_OAUTH_CLIENT_SECRET');

const html = (body: string) =>
  new Response(`<!doctype html><meta charset="utf-8"><body>${body}</body>`, {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' },
  });

/** Page that hands the token (or error) back to the Decap admin window. */
const handshake = (payload: string) =>
  html(`<p>Completing sign in…</p>
<script>
  (function () {
    var message = ${JSON.stringify(`authorization:github:${payload}`)};
    function send(e) {
      if (!window.opener) return;
      window.opener.postMessage(message, e && e.origin ? e.origin : '*');
    }
    window.addEventListener('message', send, false);
    if (window.opener) window.opener.postMessage('authorizing:github', '*');
    setTimeout(function () { send(); }, 500);
  })();
</script>`);

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error('decap-oauth: GitHub OAuth credentials are not configured');
    return html('<p>GitHub OAuth is not configured for this project.</p>');
  }

  const url = new URL(req.url);
  const step = url.pathname.split('/').filter(Boolean).pop();
  const redirectUri = `${url.origin}/functions/v1/decap-oauth/callback`;

  // Step 1: send the editor to GitHub.
  if (step === 'auth') {
    const authorize = new URL('https://github.com/login/oauth/authorize');
    authorize.searchParams.set('client_id', CLIENT_ID);
    authorize.searchParams.set('redirect_uri', redirectUri);
    authorize.searchParams.set('scope', 'repo,read:user');
    return new Response(null, {
      status: 302,
      headers: { ...corsHeaders, Location: authorize.toString() },
    });
  }

  // Step 2: exchange the code and hand the token to the admin window.
  if (step === 'callback') {
    const code = url.searchParams.get('code');
    if (!code) {
      return handshake(JSON.stringify({ error: 'Missing authorization code' }));
    }

    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: redirectUri,
      }),
    });

    if (!tokenRes.ok) {
      const details = await tokenRes.text();
      console.error(`decap-oauth: token exchange failed [${tokenRes.status}]: ${details}`);
      return handshake(JSON.stringify({ error: 'GitHub token exchange failed' }));
    }

    const token = await tokenRes.json();
    if (!token.access_token) {
      console.error('decap-oauth: token response had no access_token', token.error);
      return handshake(JSON.stringify({ error: token.error_description || 'No access token' }));
    }

    // Enforce the editor allow-list.
    const userRes = await fetch('https://api.github.com/user', {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token.access_token}`,
        'User-Agent': 'heyflou-decap-oauth',
      },
    });
    const user = userRes.ok ? await userRes.json() : null;
    const login = typeof user?.login === 'string' ? user.login.toLowerCase() : '';

    if (!login || !ALLOWED_LOGINS.map((l) => l.toLowerCase()).includes(login)) {
      console.warn(`decap-oauth: rejected login "${login || 'unknown'}"`);
      return handshake(
        JSON.stringify({ error: 'This GitHub account is not allowed to edit the blog.' }),
      );
    }

    console.log(`decap-oauth: authorized ${login}`);
    return handshake(JSON.stringify({ token: token.access_token, provider: 'github' }));
  }

  return html('<p>Decap OAuth handler. Use /auth to start sign in.</p>');
});
