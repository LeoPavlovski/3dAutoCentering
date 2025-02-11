import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        navigation: {
            home: 'Home',
            services: 'Services',
            contact: 'Contact',
            about: 'About',
        },
    },
    mkd: {
        navigation: {
            home: 'Дома',
            services: 'Сервиси',
            contact: 'Контакт',
            about: 'За нас',
        },
    },
    al: {
        navigation: {
            home: 'Shtëpi',
            services: 'Shërbime',
            contact: 'Kontakt',
            about: 'Rreth nesh',
        },
    }
};

const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en',
    messages,
});

export default i18n;