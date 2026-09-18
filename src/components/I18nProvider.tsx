'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Initialize i18next

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  // Ensure hydration matches and wait for i18n
  useEffect(() => {
    const handleLangChange = () => {
      document.documentElement.lang = i18n.language;
    };
    i18n.on('languageChanged', handleLangChange);
    return () => {
      i18n.off('languageChanged', handleLangChange);
    };
  }, [i18n]);

  return <>{children}</>;
}
