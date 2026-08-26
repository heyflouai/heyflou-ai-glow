/**
 * Bilingual route map + Spanish (es-MX) page metadata.
 *
 * Spanish copy is written natively for a non-technical Mexican SMB owner:
 * short sentences, no jargon, no machine translation.
 */

import { SITE_CONFIG } from './seo-config';

export interface LocalizedRoute {
  /** English (canonical) path */
  en: string;
  /** Spanish path */
  es: string;
  /** Native Spanish title tag */
  esTitle: string;
  /** Native Spanish meta description */
  esDescription: string;
}

export const LOCALIZED_ROUTES: LocalizedRoute[] = [
  {
    en: '/',
    es: '/es',
    esTitle: 'HeyFlou | Automatización con IA para empresas en México',
    esDescription:
      'Ponemos la IA a trabajar en tu negocio. Automatizamos ventas, atención a clientes y tareas repetitivas para que tu equipo gane horas cada semana.',
  },
  {
    en: '/services',
    es: '/es/servicios',
    esTitle: 'Servicios de IA para tu empresa | HeyFlou',
    esDescription:
      'Agentes de IA, plataformas a la medida y asesoría. Mejoramos finanzas, operaciones, atención a clientes y marketing sin cambiar todo tu sistema.',
  },
  {
    en: '/contact',
    es: '/es/contacto',
    esTitle: 'Contacto | Agenda una llamada gratis | HeyFlou',
    esDescription:
      'Cuéntanos qué te quita tiempo hoy. Te respondemos rápido y agendamos una llamada gratis para ver si podemos ayudarte.',
  },
];

const stripSlash = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

export const findRouteByPath = (pathname: string): LocalizedRoute | undefined => {
  const p = stripSlash(pathname);
  return LOCALIZED_ROUTES.find((r) => stripSlash(r.en) === p || stripSlash(r.es) === p);
};

export const isSpanishPath = (pathname: string) =>
  stripSlash(pathname) === '/es' || pathname.startsWith('/es/');

/** hreflang alternates for a given path, or null when the page has no translation. */
export const getAlternates = (
  pathname: string
): { hreflang: string; href: string }[] | null => {
  const route = findRouteByPath(pathname);
  if (!route) return null;
  const enUrl = `${SITE_CONFIG.domain}${route.en === '/' ? '/' : route.en}`;
  const esUrl = `${SITE_CONFIG.domain}${route.es}`;
  return [
    { hreflang: 'en', href: enUrl },
    { hreflang: 'es-MX', href: esUrl },
    { hreflang: 'x-default', href: enUrl },
  ];
};
