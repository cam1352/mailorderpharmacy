import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav_home": "Home",
      "nav_medications": "Medications",
      "nav_locations": "Locations",
      "hero_title": "The Best Online Pharmacy Delivery",
      "hero_subtitle": "Fast, secure, and affordable prescription delivery directly to your door."
    }
  },
  es: {
    translation: {
      "nav_home": "Inicio",
      "nav_medications": "Medicamentos",
      "nav_locations": "Ubicaciones",
      "hero_title": "La Mejor Farmacia en Línea",
      "hero_subtitle": "Entrega rápida y segura de recetas médicas directamente a su puerta."
    }
  },
  fr: {
    translation: {
      "nav_home": "Accueil",
      "nav_medications": "Médicaments",
      "nav_locations": "Emplacements",
      "hero_title": "La Meilleure Pharmacie en Ligne",
      "hero_subtitle": "Livraison rapide et sécurisée de vos ordonnances à votre porte."
    }
  },
  zh: {
    translation: {
      "nav_home": "首页",
      "nav_medications": "药品",
      "nav_locations": "地点",
      "hero_title": "最佳在线药房配送",
      "hero_subtitle": "安全、快速、实惠的处方药直接送货上门。"
    }
  },
  hi: {
    translation: {
      "nav_home": "मुख्य पृष्ठ",
      "nav_medications": "दवाइयां",
      "nav_locations": "स्थान",
      "hero_title": "सर्वश्रेष्ठ ऑनलाइन फ़ार्मेसी डिलीवरी",
      "hero_subtitle": "आपके घर तक तेज़, सुरक्षित और किफ़ायती प्रिस्क्रिप्शन डिलीवरी।"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
