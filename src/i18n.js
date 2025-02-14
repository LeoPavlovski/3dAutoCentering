import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        navigation: {
            home: 'Home',
            services: 'Services',
            contact: 'Contact',
            gallery: 'Gallery',
            prices: 'Prices',
            auto: '3D AUTO',
        },
        centering: 'Centering',
        automotiveService: 'Automotive Service',
        contactUs: 'Contact Us',
        instagram: 'Instagram',
        email: 'E-mail',
        contactInfo: {
            contactPerson: 'Contact Person',
            address: 'Address',
            phone: 'Phone',
            machine: 'Techno Vector 7 Machine',
            workingHours: 'Working Hours',
            advancedSystem: 'Advanced 3D Alignment System',
            monSat: 'Mon-Sat: 9:00 AM - 5:00 PM',
            sun: 'Sun: Closed'
        }
    },
    mkd: {
        navigation: {
            home: 'Почетна',
            services: 'Што нудиме',
            contact: 'Контакт',
            gallery: 'Галерија',
            prices: 'Ценовник',
            auto: '3Д АВТО',
        },
        centering: 'Центрирање',
        automotiveService: 'Автомобилски сервис',
        contactUs: 'Контактирајте не',
        instagram: 'Инстаграм',
        email: 'Е-маил',
        contactInfo: {
            contactPerson: 'Лице за Контакт',
            address: 'Адреса',
            phone: 'Телефон',
            machine: 'Техно Вектор 7 Машина',
            workingHours: 'Работно време',
            advancedSystem: 'Напреден 3Д систем за центрирање',
            monSat: 'Понеделник - Сабота: 9:00 - 17:00',
            sun: 'Недела: Затворено'
        }
    },
    al: {
        navigation: {
            home: 'Ballina',
            services: 'Shërbime',
            contact: 'Kontakt',
            gallery: 'Galeria',
            prices: 'Çmimet',
            auto: '3D Makina'
        },
        centering: 'Përqendrimi',
        automotiveService: 'Shërbimi i automobilave',
        contactUs: 'Na kontaktoni',
        instagram: 'Instagram',
        email: 'E-mail',
        contactInfo: {
            contactPerson: 'Personi i kontaktit',
            address: 'Adresa',
            phone: 'Telefoni',
            machine: 'Techno Vector 7 Makina',
            workingHours: 'Orari i punës',
            advancedSystem: 'Sistemi i avancuar i përqendrimit',
            monSat: 'Hën-Sht: 9:00 - 17:00',
            sun: 'Die: E mbyllur'
        }
    }
};

const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en',
    messages,
});

export default i18n;
