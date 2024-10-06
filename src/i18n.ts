import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import he from './locales/he/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: { translation: en },
      he: { translation: he },
    },
    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: false, 
    },
  });

export default i18n;
