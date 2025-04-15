import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white text-sm"
    >
      {i18n.language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}

export default LanguageToggle;