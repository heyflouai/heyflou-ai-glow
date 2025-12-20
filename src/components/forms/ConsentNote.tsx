import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n';

export const ConsentNote: React.FC = () => {
  const t = useTranslation();
  
  return (
    <p className="text-xs text-muted-foreground mt-4">
      {t.forms.consentText}{' '}
      <Link 
        to="/privacy" 
        className="text-hf-teal hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.forms.privacyPolicy}
      </Link>
      .
    </p>
  );
};