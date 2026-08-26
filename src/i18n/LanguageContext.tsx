import React, { createContext, useContext, useEffect, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { en, TranslationKeys } from './translations/en';
import { es } from './translations/es';
import { isSpanishPath, getCounterpartPath } from '@/lib/i18n-routes';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const translations: Record<Language, TranslationKeys> = {
  en,
  es,
};


// Create a proxy to log missing translation keys
function createTranslationProxy<T extends object>(obj: T, path: string[] = []): T {
  return new Proxy(obj, {
    get(target, prop: string) {
      const value = target[prop as keyof T];
      const currentPath = [...path, prop];
      
      if (value === undefined) {
        console.warn(`[i18n] Missing translation key: ${currentPath.join('.')}`);
        return `[Missing: ${currentPath.join('.')}]`;
      }
      
      if (typeof value === 'object' && value !== null) {
        return createTranslationProxy(value as object, currentPath);
      }
      
      return value;
    },
  }) as T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Locale comes from the ROUTE, so it resolves synchronously during
  // static pre-rendering (Spanish HTML is emitted at build time).
  const language: Language = isSpanishPath(pathname) ? 'es' : 'en';

  // Switching language navigates to the counterpart URL of the current page.
  const setLanguage = useCallback(
    (lang: Language) => {
      if (lang === language) return;
      navigate(getCounterpartPath(pathname, lang));
    },
    [language, navigate, pathname]
  );

  useEffect(() => {
    document.documentElement.lang = language === 'es' ? 'es-MX' : 'en';
  }, [language]);


  // Wrap translations in proxy for development debugging
  const t = useMemo(() => {
    const rawTranslations = translations[language];
    if (import.meta.env.DEV) {
      return createTranslationProxy(rawTranslations);
    }
    return rawTranslations;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Fallback context for HMR edge cases
const fallbackContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: en,
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  // Return fallback during HMR to prevent crashes
  if (context === undefined) {
    if (import.meta.env.DEV) {
      console.warn('[i18n] LanguageContext not found, using fallback. This may happen during HMR.');
      return fallbackContext;
    }
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Convenience hook that just returns translations
export function useTranslation() {
  const { t } = useLanguage();
  return t;
}
