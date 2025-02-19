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
        whatareweoffering: 'What are we offering?',
        contactInfo: {
            contactPerson: 'Contact Person',
            address: 'Address',
            phone: 'Phone',
            machine: 'Techno Vector 7 Machine',
            workingHours: 'Working Hours',
            advancedSystem: 'Advanced 3D Alignment System',
            monSat: 'Mon-Sat: 9:00 AM - 5:00 PM',
            sun: 'Sun: Closed'
        },
        socialMedia: 'Follow us on our social media',
        servicesDetails: {
            machine: 'Techno Vector 7',
            machineDesc: 'We use the advanced Techno Vector 7, featuring a 3D 4-camera system for precise wheel alignment. This cutting-edge technology provides real-time measurements, ensuring accuracy and optimal vehicle performance.',

            alignment: 'Comprehensive Wheel Alignment',
            alignmentDesc: 'Our alignment process ensures the front axle, rear axle, and all wheels are correctly positioned. This improves handling, stability, and tire lifespan. We service cars, vans, and off-road jeeps for smooth and safe driving.',

            chassisCheck: 'Pre-Alignment Chassis Inspection',
            chassisCheckDesc: 'Before performing the alignment, we inspect the chassis, and key components underneath the vehicle. This allows us to detect any potential issues or necessary replacements, ensuring a solid foundation for the alignment process.'
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
        whatareweoffering: 'Што ви нудиме?',
        contactInfo: {
            contactPerson: 'Лице за Контакт',
            address: 'Адреса',
            phone: 'Телефон',
            machine: 'Техно Вектор 7 Машина',
            workingHours: 'Работно време',
            advancedSystem: 'Напреден 3Д систем за центрирање',
            monSat: 'Понеделник - Сабота: 9:00 - 17:00',
            sun: 'Недела: Затворено'
        },
        socialMedia: 'Следете не на нашите социјални мрежи',
        servicesDetails: {
            machine: 'Техно Вектор 7',
            machineDesc: 'Ние користиме напредна Techno Vector 7 машина, која е опремена со 3D систем со 4 камери за прецизно поставување на тркалата. Оваа најнова технологија обезбедува мерења во реално време, што гарантира точност и оптимални перформанси на возилото.',

            alignment: 'Комплетно центрирање на тркала',
            alignmentDesc: 'Нашиот процес на центрирање на тркалата обезбедува правилно позиционирање на предниот и задниот трап. Ова го подобрува управувањето, стабилноста и животниот век на гумите. Нудиме услуги за автомобили и комбиња за безбедно и сигурно возење.',

            chassisCheck: 'Проверка на шасијата пред центрирање на возилото',
            chassisCheckDesc: 'Пред да го ставиме возилото на машина за центрирање, вршиме детална проверка на шасијата и клучните компоненти на подвозјето. Ова ни овозможува да откриеме потенцијални проблеми или потребни замени, осигурувајќи стабилна основа за центрирање.'
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
        whatareweoffering: 'Çfarë ofrojmë?',
        contactInfo: {
            contactPerson: 'Personi i kontaktit',
            address: 'Lokacioni',
            phone: 'Telefoni',
            machine: 'Techno Vector 7 Makina',
            workingHours: 'Orari i punës',
            advancedSystem: 'Sistemi i avancuar i përqendrimit',
            monSat: 'Hën-Sht: 9:00 - 17:00',
            sun: 'Diel: E mbyllur'
        },
        socialMedia: 'Na ndiqni në rrjetet tona sociale',
        servicesDetails: {
            machine: 'Techno Vector 7',
            machineDesc: 'Ne përdorim makinën e avancuar Techno Vector 7, e cila është e pajisur me një sistem 3D me 4 kamera për rregullimin e saktë të rrotave. Kjo teknologji më e fundit siguron matje në kohë reale, duke garantuar saktësi dhe performancë optimale të automjetit.',

            alignment: 'Rregullimi i plotë i rrotave',
            alignmentDesc: 'Procesi ynë i rregullimit të rrotave siguron pozicionimin e duhur të paraklopit të përparmë dhe të pasmë. Kjo përmirëson drejtimin, stabilitetin dhe jetëgjatësinë e gomave. Ne ofrojmë shërbime për makina dhe furgonë për një vozitje të sigurt dhe të besueshme.',

            chassisCheck: 'Kontrolli i shasisë para rregullimit të automjetit',
            chassisCheckDesc: 'Para se ta vendosim automjetin në makinë për rregullimin e rrotave, kryejmë një kontroll të detajuar të shasisë dhe komponentëve kryesorë të nënshasisë. Kjo na lejon të zbulojmë probleme të mundshme ose pjesë që duhen zëvendësuar, duke siguruar një bazë të qëndrueshme për rregullim.'
        }


    }
};

const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en',
    messages,
});

export default i18n;
