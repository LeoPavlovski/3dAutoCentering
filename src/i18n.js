import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        navigation: {
            home: 'Home',
            services: 'Services',
            contact: 'Contact',
            gallery:'Gallery'
        },
    },
    mkd: {
        navigation: {
            home: 'Почетна',
            services: 'Што нудиме',
            contact: 'Контакт',
            gallery:'Галерија'
        },
    },
    al: {
        navigation: {
            home: 'Shtëpi',
            services: 'Shërbime',
            contact: 'Kontakt',
            gallery:'Galeria'
        },
    }
};

const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en',
    messages,
});

export default i18n;
