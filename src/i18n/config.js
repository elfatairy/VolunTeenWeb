import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from './locales/en.json';
import arJSON from './locales/ar.json';

i18n.use(initReactI18next).init({
    fallbackLng: 'ar',
    lng: 'en',
    resources: {
        en: {
            translations: enJSON
        },
        ar: {
            translations: arJSON
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'ar'];

export default i18n;