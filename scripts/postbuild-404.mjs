// Static hosts serve /404.html for unknown paths; vite-react-ssg emits 404/index.html.
import { copyFile } from 'node:fs/promises';

await copyFile('dist/404/index.html', 'dist/404.html');
console.log('postbuild: wrote dist/404.html');
