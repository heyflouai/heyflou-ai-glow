/**
 * Bilingual route map + Spanish (es-MX) page metadata.
 *
 * The locale is part of the ROUTE: English lives at the canonical paths,
 * Spanish lives under /es/* with translated slugs. Because the language is
 * derived from the pathname (see src/i18n/LanguageContext.tsx), Spanish copy
 * resolves during static pre-rendering and ends up in the built HTML.
 *
 * Spanish copy is written natively for a non-technical Mexican SMB owner:
 * "tú", short sentences, no jargon, MXN. TODO(copy) marks strings the team
 * still wants to review/replace with final wording.
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
    // TODO(copy): revisar título y descripción finales
    en: '/services/agents',
    es: '/es/servicios/agentes',
    esTitle: 'Agentes de IA que trabajan por ti | HeyFlou',
    esDescription:
      'Agentes de IA que contestan mensajes, dan seguimiento a clientes y ordenan tu información. Trabajan todo el día y se conectan con lo que ya usas.',
  },
  {
    // TODO(copy): revisar título y descripción finales
    en: '/services/infrastructure',
    es: '/es/servicios/infraestructura',
    esTitle: 'Plataformas de IA a la medida | HeyFlou',
    esDescription:
      'Construimos la plataforma que tu operación necesita: datos ordenados, procesos claros y herramientas hechas para tu forma de trabajar.',
  },
  {
    // TODO(copy): revisar título y descripción finales
    en: '/services/consulting',
    es: '/es/servicios/consultoria',
    esTitle: 'Asesoría en IA para tu negocio | HeyFlou',
    esDescription:
      'Te ayudamos a decidir dónde sí conviene usar IA. Diagnóstico, prioridades y un plan claro, sin promesas vacías.',
  },
  {
    // TODO(copy): revisar título y descripción finales
    en: '/services/custom',
    es: '/es/servicios/personalizado',
    esTitle: 'Automatización personalizada con IA | HeyFlou',
    esDescription:
      'Cuando nada estándar te sirve, lo hacemos a tu medida. Automatizamos el proceso que hoy te quita más horas.',
  },
  {
    // TODO(copy): revisar título y descripción finales
    en: '/about',
    es: '/es/nosotros',
    esTitle: 'Quiénes somos | HeyFlou',
    esDescription:
      'Somos un equipo que pone la IA a trabajar en empresas medianas y pequeñas de México, con foco en finanzas, operaciones, atención a clientes y marketing.',
  },
  {
    // TODO(copy): revisar título y descripción finales
    en: '/case-studies',
    es: '/es/casos-de-exito',
    esTitle: 'Casos de éxito | HeyFlou',
    esDescription:
      'Resultados reales de empresas que ya trabajan con nosotros: horas recuperadas, procesos ordenados y equipos con más tiempo para vender.',
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

/**
 * Path of the same page in the requested language. Falls back to the
 * language home when the current page has no translated counterpart.
 */
export const getCounterpartPath = (pathname: string, target: 'en' | 'es'): string => {
  const route = findRouteByPath(pathname);
  if (route) return target === 'es' ? route.es : route.en;
  return target === 'es' ? '/es' : '/';
};

/** Translate an English in-app path for the active language (used by nav/footer links). */
export const localizePath = (enPath: string, language: 'en' | 'es'): string => {
  if (language === 'en') return enPath;
  const route = LOCALIZED_ROUTES.find((r) => stripSlash(r.en) === stripSlash(enPath));
  return route ? route.es : enPath;
};

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
