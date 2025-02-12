import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        navigation: {
            home: 'Home',
            services: 'Services',
            contact: 'Contact',
            gallery:'Gallery',
            prices:'Prices'
        },
    },
    mkd: {
        navigation: {
            home: 'Почетна',
            services: 'Што нудиме',
            contact: 'Контакт',
            gallery:'Галерија',
            prices:"Ценовник",
        },
    },
    al: {
        navigation: {
            home: 'Shtëpi',
            services: 'Shërbime',
            contact: 'Kontakt',
            gallery:'Galeria',
            prices:"Çmimet"
        },
    }
};

const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en',
    messages,
});

export default i18n;
