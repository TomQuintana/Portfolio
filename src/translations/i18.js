import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en.json'
import translationES from './es.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  },
  lng: 'en', // Idioma predeterminado
  fallbackLng: 'en', // Idioma de respaldo en caso de que la traducción no esté disponible
  interpolation: {
    escapeValue: false, // Permite usar HTML en las traducciones
  },
});

export default i18n;
