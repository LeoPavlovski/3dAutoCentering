import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        navigation: {
            home: 'Home',
            services: 'Services',
            contact: 'Contact',
            about: 'About',
            gallery:'Gallery'
        },
    },
    mkd: {
        navigation: {
            home: 'Дома',
            services: 'Сервиси',
            contact: 'Контакт',
            about: 'За нас',
            gallery:'Галерија'
        },
    },
    al: {
        navigation: {
            home: 'Shtëpi',
            services: 'Shërbime',
            contact: 'Kontakt',
            about: 'Rreth nesh',
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