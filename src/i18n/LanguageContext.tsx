import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { en, TranslationKeys } from './translations/en';
import { es } from './translations/es';

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

const STORAGE_KEY = 'heyflou-language';

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
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'es') {
        return stored;
      }
    }
    return 'en'; // Default to English
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    // Update document lang attribute for accessibility
    document.documentElement.lang = lang;
  }, []);

  // Set initial document lang
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Wrap translations in proxy for development debugging
  const t = useMemo(() => {
    const rawTranslations = translations[language];
    if (process.env.NODE_ENV === 'development') {
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
    if (process.env.NODE_ENV === 'development') {
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
