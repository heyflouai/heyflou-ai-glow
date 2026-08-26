import { useEffect } from 'react';
import { useLanguage } from '@/i18n';

/**
 * Wrapper for /es/* routes: forces the UI into Spanish so the page renders
 * natively in es-MX regardless of the stored language preference.
 */
export const SpanishRoute = ({ children }: { children: React.ReactNode }) => {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (language !== 'es') setLanguage('es');
    document.documentElement.lang = 'es-MX';
    return () => {
      document.documentElement.lang = language;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
