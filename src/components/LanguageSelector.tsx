'use client';

import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import '../i18n';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group inline-block z-50">
      <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-indigo-900 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors border border-indigo-200 shadow-sm">
        <Globe className="w-4 h-4" />
        <span className="uppercase">{i18n.resolvedLanguage || 'EN'}</span>
      </button>
      
      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
        <div className="py-2">
          <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900">🇬🇧 English</button>
          <button onClick={() => changeLanguage('es')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900">🇪🇸 Español</button>
          <button onClick={() => changeLanguage('fr')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900">🇫🇷 Français</button>
          <button onClick={() => changeLanguage('zh')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900">🇨🇳 中文</button>
          <button onClick={() => changeLanguage('hi')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900">🇮🇳 हिन्दी (Indian)</button>
        </div>
      </div>
    </div>
  );
}
