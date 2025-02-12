import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        navigation: {
            home: 'Home',
            services: 'Services',
            contact: 'Contact',
            gallery:'Gallery',
            prices:'Prices',
            auto:'3D AUTO',
        },
        centering:'Centering',
        automotiveService:'Automotive Service'
    },
    mkd: {
        navigation: {
            home: 'Почетна',
            services: 'Што нудиме',
            contact: 'Контакт',
            gallery:'Галерија',
            prices:"Ценовник",
            auto:"3Д АВТО",
        },
        centering:'Центрирање',
        automotiveService:'Автомобилски сервис'
    },
    al: {
        navigation: {
            home: 'Shtëpi',
            services: 'Shërbime',
            contact: 'Kontakt',
            gallery:'Galeria',
            prices:"Çmimet",
            auto:"3D Makina"
        },
        centering:'Përqendrimi',
        automotiveService:'Shërbimi i automobilave'
    }
};

const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en',
    messages,
});

export default i18n;
