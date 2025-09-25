import React from 'react';
import { Link } from 'react-router-dom';

export const ConsentNote: React.FC = () => {
  return (
    <p className="text-xs text-muted-foreground mt-4">
      By submitting, you agree to be contacted and to our{' '}
      <Link 
        to="/privacy" 
        className="text-hf-teal hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </Link>
      .
    </p>
  );
};