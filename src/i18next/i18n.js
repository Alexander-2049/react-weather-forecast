import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from './languageDetector';
import translations from './translations.json';

// Receiving language from localstorage
const savedLanguage = localStorage.getItem('language');
// Receiving client browser language
const clientLanguage = navigator.language || navigator.userLanguage;

// Setting language variable that is gonna be used on webpage load
let language = savedLanguage || clientLanguage;
    language = languageDetector(language);
// Writing html lang="" attribute
document.documentElement.setAttribute('lang', language);

// If localstorage was empty writing a language to it
if(!savedLanguage) {
    localStorage.setItem('language', language);
}

// Setting up i18next
i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: language,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

// On language update changing html lang="" and writing updated language to localstorage
i18n.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', languageDetector(lng));
    localStorage.setItem('language', languageDetector(lng));
});

export default i18n;