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
            machine: 'Techno Vector 7',
            machineDesc: 'Ние користиме напредна Techno Vector 7 машина, која е опремена со 3D систем со 4 камери за прецизно поставување на тркалата. Оваа најнова технологија обезбедува мерења во реално време, што гарантира точност и оптимални перформанси на возилото.',

            alignment: 'Комплетно поставување на тркала',
            alignmentDesc: 'Нашиот процес на поставување на тркала обезбедува правилно позиционирање на предниот и задниот трап, како и на сите тркала. Ова го подобрува управувањето, стабилноста и животниот век на гумите. Нудиме услуги за автомобили, комбиња и оф-роуд џипови за безбедно и сигурно возење.',

            chassisCheck: 'Превентивна проверка на шасијата пред поставување на тркалата',
            chassisCheckDesc: 'Пред да го поставиме возилото на машина за центрирање, извршуваме детална проверка на шасијата и клучните компоненти под возилото. Ова ни овозможува да откриеме потенцијални проблеми или потребни замени, осигурувајќи стабилна основа за процесот на центрирање.'
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
        whatareweoffering: 'Çfarë po ofrojmë?',
        contactInfo: {
            contactPerson: 'Personi i kontaktit',
            address: 'Adresa',
            phone: 'Telefoni',
            machine: 'Techno Vector 7 Makina',
            workingHours: 'Orari i punës',
            advancedSystem: 'Sistemi i avancuar i përqendrimit',
            monSat: 'Hën-Sht: 9:00 - 17:00',
            sun: 'Die: E mbyllur'
        },
        socialMedia: 'Na ndiqni në rrjetet tona sociale',
        servicesDetails: {
            machine: 'Techno Vector 7',
            machineDesc: 'Ne përdorim Techno Vector 7, një sistem i avancuar me 4 kamera 3D për një vendosje të saktë të rrotave. Kjo teknologji moderne siguron matje në kohë reale, duke garantuar saktësi dhe performancë optimale të automjetit.',

            alignment: 'Vendosje e Plotë e Rrotave',
            alignmentDesc: 'Procesi ynë i vendosjes siguron që aksesi i përparmë, aksesi i pasëm dhe të gjitha rrotat të jenë pozicionuar saktë. Kjo përmirëson manovrimin, stabilitetin dhe jetëgjatësinë e gomave. Ne ofrojmë shërbime për makina, furgona dhe xhipa off-road për një udhëtim të sigurt dhe të qetë.',

            chassisCheck: 'Inspektimi i Shasisë dhe Suspencionit para Vendosjes së Rrotave',
            chassisCheckDesc: 'Përpara se ta vendosim automjetin në makinë për vendosjen e rrotave, ne bëjmë një inspektim të thelluar të shasisë, suspencionit dhe komponentëve të rëndësishëm nën automjet. Kjo na lejon të zbulojmë çdo problem të mundshëm ose nevojë për zëvendësim, duke siguruar një bazë të qëndrueshme për procesin e vendosjes.'
        }

    }
};

const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en',
    messages,
});

export default i18n;
