import { useLanguage } from '@/i18n';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleToggle = (lang: 'en' | 'es') => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-1 bg-muted rounded-full p-0.5">
      <button
        onClick={() => handleToggle('en')}
        className={cn(
          'px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200',
          language === 'en'
            ? 'bg-hf-teal text-white shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-label={language === 'en' ? 'English selected' : 'Switch to English'}
      >
        EN
      </button>
      <button
        onClick={() => handleToggle('es')}
        className={cn(
          'px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200',
          language === 'es'
            ? 'bg-hf-teal text-white shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-label={language === 'es' ? 'Español seleccionado' : 'Cambiar a Español'}
      >
        ES
      </button>
    </div>
  );
}