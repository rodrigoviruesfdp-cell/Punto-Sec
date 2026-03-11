document.addEventListener('DOMContentLoaded', () => {
    // 0. Translations
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_services: "Servicios",
            nav_reviews: "Reseñas",
            nav_location: "Horario y Ubicación",
            nav_contact: "Contacto",
            hero_title: "Cuidado Premium<br>Para tus Prendas",
            hero_subtitle: "La tintorería de confianza en Cádiz. Elegancia, perfección y detalle en cada lavado.",
            hero_btn_services: "Ver Servicios",
            hero_btn_visit: "Visítanos",
            services_title: "Servicios y Precios",
            services_desc: "Cuidado experto con las técnicas más avanzadas para garantizar la máxima durabilidad y esplendor de sus tejidos.",
            service_1_name: "Lavado en Seco de Traje",
            service_2_name: "Planchado de Camisa",
            service_3_name: "Limpieza de Edredón",
            service_4_name: "Lavado Vestido de Fiesta",
            service_4_price: "Desde 40€",
            service_5_name: "Limpieza de Alfombras",
            service_5_price: "Desde 20€/m²",
            service_6_name: "Bono Mensual Premium",
            reviews_title: "Lo que dicen nuestros clientes",
            reviews_desc: "Testimonios de quienes confían en nosotros sus prendas más preciadas.",
            review_1_text: "\"Trato inmejorable y resultados impecables. Llevé un traje que pensaba que estaba perdido y lo dejaron como nuevo. Totalmente recomendados.\"",
            review_2_text: "\"La mejor tintorería de Cádiz sin ninguna duda. Rapidez, amabilidad y profesionalidad al máximo nivel. Mis camisas siempre están perfectas.\"",
            review_3_text: "\"Servicio de 10. Limpiaron un abrigo muy delicado y superaron mis expectativas. Además el local es precioso y la atención es exquisita.\"",
            review_4_text: "\"Fantásticos. Les confié la limpieza de varias prendas muy delicadas y el resultado fue espectacular. Tienen un cliente para toda la vida.\"",
            location_title: "Horario y Ubicación",
            location_address_title: "Dirección",
            location_phone_title: "Teléfono",
            location_hours_title: "Horario de Apertura",
            hours_weekdays: "Lunes - Viernes:",
            hours_saturday: "Sábados:",
            hours_sunday: "Domingos:",
            hours_closed: "Cerrado",
            store_status_calc: "Calculando estado...",
            store_status_open: "ABIERTO AHORA",
            store_status_closed: "CERRADO AHORA",
            contact_title: "Contáctanos",
            contact_desc: "¿Tienes alguna duda o necesitas un servicio especial? Escríbenos.",
            contact_name: "Nombre completo",
            contact_email: "Correo electrónico",
            contact_message: "Tu mensaje...",
            contact_legal: "He leído y acepto la Política de Privacidad y consiento el tratamiento de mis datos personales según lo establecido en el RGPD. Entiendo que puedo revocar mi consentimiento en cualquier momento.",
            contact_submit: "Enviar Mensaje",
            contact_sending: "Enviando...",
            contact_sent: "Mensaje Enviado",
            footer_copyright: "© 2026 Punto Sec Tintorería Premium. Todos los derechos reservados.",
            footer_legal: "Aviso Legal",
            footer_privacy: "Política de Privacidad",
            footer_cookies: "Política de Cookies",
            cookie_text: "Utilizamos cookies propias y de terceros para mejorar nuestros servicios, analizar tu navegación y ofrecerte una experiencia personalizada. Al hacer clic en \"Aceptar\", aceptas su uso.",
            cookie_accept: "Aceptar",
            cookie_reject: "Rechazar"
        },
        en: {
            nav_home: "Home",
            nav_services: "Services",
            nav_reviews: "Reviews",
            nav_location: "Hours & Location",
            nav_contact: "Contact",
            hero_title: "Premium Care<br>For Your Clothes",
            hero_subtitle: "The trusted dry cleaner in Cádiz. Elegance, perfection, and detail in every wash.",
            hero_btn_services: "View Services",
            hero_btn_visit: "Visit Us",
            services_title: "Services and Prices",
            services_desc: "Expert care with the most advanced techniques to ensure maximum durability and splendor of your fabrics.",
            service_1_name: "Suit Dry Cleaning",
            service_2_name: "Shirt Ironing",
            service_3_name: "Duvet Cleaning",
            service_4_name: "Party Dress Washing",
            service_4_price: "From 40€",
            service_5_name: "Carpet Cleaning",
            service_5_price: "From 20€/m²",
            service_6_name: "Premium Monthly Pass",
            reviews_title: "What our clients say",
            reviews_desc: "Testimonials from those who trust us with their most precious garments.",
            review_1_text: "\"Unbeatable treatment and impeccable results. I brought a suit I thought was lost and they left it like new. Totally recommended.\"",
            review_2_text: "\"The best dry cleaner in Cádiz without a doubt. Speed, friendliness, and professionalism at the highest level. My shirts are always perfect.\"",
            review_3_text: "\"10/10 service. They cleaned a very delicate coat and exceeded my expectations. Also the place is beautiful and the attention is exquisite.\"",
            review_4_text: "\"Fantastic. I entrusted them with the cleaning of several very delicate garments and the result was spectacular. They have a client for life.\"",
            location_title: "Hours & Location",
            location_address_title: "Address",
            location_phone_title: "Phone",
            location_hours_title: "Opening Hours",
            hours_weekdays: "Monday - Friday:",
            hours_saturday: "Saturdays:",
            hours_sunday: "Sundays:",
            hours_closed: "Closed",
            store_status_calc: "Calculating status...",
            store_status_open: "OPEN NOW",
            store_status_closed: "CLOSED NOW",
            contact_title: "Contact Us",
            contact_desc: "Do you have any questions or need a special service? Write to us.",
            contact_name: "Full name",
            contact_email: "Email address",
            contact_message: "Your message...",
            contact_legal: "I have read and accept the Privacy Policy and consent to the processing of my personal data as established in the GDPR. I understand that I can revoke my consent at any time.",
            contact_submit: "Send Message",
            contact_sending: "Sending...",
            contact_sent: "Message Sent",
            footer_copyright: "© 2026 Punto Sec Premium Dry Cleaner. All rights reserved.",
            footer_legal: "Legal Notice",
            footer_privacy: "Privacy Policy",
            footer_cookies: "Cookie Policy",
            cookie_text: "We use our own and third-party cookies to improve our services, analyze your navigation and offer you a personalized experience. By clicking \"Accept\", you agree to their use.",
            cookie_accept: "Accept",
            cookie_reject: "Reject"
        },
        de: {
            nav_home: "Startseite",
            nav_services: "Leistungen",
            nav_reviews: "Bewertungen",
            nav_location: "Zeiten & Ort",
            nav_contact: "Kontakt",
            hero_title: "Premium-Pflege<br>Für Ihre Kleidung",
            hero_subtitle: "Die vertrauenswürdige Reinigung in Cádiz. Eleganz, Perfektion und Detail in jeder Wäsche.",
            hero_btn_services: "Leistungen sehen",
            hero_btn_visit: "Besuchen Sie uns",
            services_title: "Leistungen und Preise",
            services_desc: "Expertenpflege mit fortschrittlichsten Techniken für maximale Haltbarkeit und Glanz Ihrer Stoffe.",
            service_1_name: "Anzug-Chemische Reinigung",
            service_2_name: "Hemden bügeln",
            service_3_name: "Bettdeckenreinigung",
            service_4_name: "Abendkleid waschen",
            service_4_price: "Ab 40€",
            service_5_name: "Teppichreinigung",
            service_5_price: "Ab 20€/m²",
            service_6_name: "Premium Monatspass",
            reviews_title: "Was unsere Kunden sagen",
            reviews_desc: "Erfahrungsberichte von denen, die uns ihre wertvollsten Kleidungsstücke anvertrauen.",
            review_1_text: "\"Unschlagbare Behandlung und makellose Ergebnisse. Ich brachte einen Anzug, den ich für verloren hielt, und sie machten ihn wie neu. Absolut empfehlenswert.\"",
            review_2_text: "\"Ohne Zweifel die beste Reinigung in Cádiz. Schnelligkeit, Freundlichkeit und Professionalität auf höchstem Niveau. Meine Hemden sind immer perfekt.\"",
            review_3_text: "\"Service 10/10. Sie haben einen sehr empfindlichen Mantel gereinigt und meine Erwartungen übertroffen. Außerdem ist das Geschäft wunderschön.\"",
            review_4_text: "\"Fantastisch. Ich habe ihnen die Reinigung mehrerer empfindlicher Kleidungsstücke anvertraut und das Ergebnis war spektakulär. Ein Kunde fürs Leben.\"",
            location_title: "Öffnungszeiten & Standort",
            location_address_title: "Adresse",
            location_phone_title: "Telefon",
            location_hours_title: "Öffnungszeiten",
            hours_weekdays: "Montag - Freitag:",
            hours_saturday: "Samstags:",
            hours_sunday: "Sonntags:",
            hours_closed: "Geschlossen",
            store_status_calc: "Status wird berechnet...",
            store_status_open: "JETZT GEÖFFNET",
            store_status_closed: "JETZT GESCHLOSSEN",
            contact_title: "Kontaktiere uns",
            contact_desc: "Haben Sie Fragen oder benötigen Sie einen besonderen Service? Schreiben Sie uns.",
            contact_name: "Vollständiger Name",
            contact_email: "E-Mail-Adresse",
            contact_message: "Ihre Nachricht...",
            contact_legal: "Ich habe die Datenschutzrichtlinie gelesen und akzeptiert und stimme der Verarbeitung meiner personenbezogenen Daten gemäß DSGVO zu.",
            contact_submit: "Nachricht senden",
            contact_sending: "Senden...",
            contact_sent: "Nachricht gesendet",
            footer_copyright: "© 2026 Punto Sec Premium-Reinigung. Alle Rechte vorbehalten.",
            footer_legal: "Rechtlicher Hinweis",
            footer_privacy: "Datenschutzrichtlinie",
            footer_cookies: "Cookie-Richtlinie",
            cookie_text: "Wir verwenden eigene und Drittanbieter-Cookies, um unsere Dienste zu verbessern, Ihre Navigation zu analysieren und ein personalisiertes Erlebnis zu bieten.",
            cookie_accept: "Akzeptieren",
            cookie_reject: "Ablehnen"
        },
        fr: {
            nav_home: "Accueil",
            nav_services: "Services",
            nav_reviews: "Avis",
            nav_location: "Horaires et Lieu",
            nav_contact: "Contact",
            hero_title: "Soin Premium<br>Pour Vos Vêtements",
            hero_subtitle: "Le pressing de confiance à Cadix. Élégance, perfection et détail dans chaque lavage.",
            hero_btn_services: "Voir les Services",
            hero_btn_visit: "Nous Visiter",
            services_title: "Services et Prix",
            services_desc: "Un soin expert avec les techniques les plus avancées pour garantir la durabilité de vos tissus.",
            service_1_name: "Nettoyage à sec de costume",
            service_2_name: "Repassage de chemise",
            service_3_name: "Nettoyage de couette",
            service_4_name: "Lavage de robe de soirée",
            service_4_price: "À partir de 40€",
            service_5_name: "Nettoyage de tapis",
            service_5_price: "À partir de 20€/m²",
            service_6_name: "Abonnement Mensuel Premium",
            reviews_title: "Ce que disent nos clients",
            reviews_desc: "Témoignages de ceux qui nous confient leurs vêtements les plus précieux.",
            review_1_text: "\"Traitement imbattable et résultats impeccables. J'ai apporté un costume et ils l'ont laissé comme neuf.\"",
            review_2_text: "\"Le meilleur pressing de Cadix sans aucun doute. Rapidité, gentillesse et professionnalisme.\"",
            review_3_text: "\"Service 10/10. Ils ont nettoyé un manteau très délicat et ont dépassé mes attentes.\"",
            review_4_text: "\"Fantastique. Je leur ai confié le nettoyage de plusieurs vêtements délicats et le résultat a été spectaculaire.\"",
            location_title: "Horaires et Lieu",
            location_address_title: "Adresse",
            location_phone_title: "Téléphone",
            location_hours_title: "Heures d'ouverture",
            hours_weekdays: "Lundi - Vendredi:",
            hours_saturday: "Samedis:",
            hours_sunday: "Dimanches:",
            hours_closed: "Fermé",
            store_status_calc: "Calcul du statut...",
            store_status_open: "OUVERT MAINTENANT",
            store_status_closed: "FERMÉ MAINTENANT",
            contact_title: "Contactez-nous",
            contact_desc: "Avez-vous des questions ? Écrivez-nous.",
            contact_name: "Nom complet",
            contact_email: "Adresse e-mail",
            contact_message: "Votre message...",
            contact_legal: "J'ai lu et accepté la politique de confidentialité et je consens au traitement de mes données.",
            contact_submit: "Envoyer le message",
            contact_sending: "Envoi...",
            contact_sent: "Message envoyé",
            footer_copyright: "© 2026 Punto Sec Pressing Premium. Tous droits réservés.",
            footer_legal: "Avis Légal",
            footer_privacy: "Politique de Confidentialité",
            footer_cookies: "Politique de Cookies",
            cookie_text: "Nous utilisons des cookies pour améliorer nos services, analyser votre navigation et vous offrir une expérience personnalisée.",
            cookie_accept: "Accepter",
            cookie_reject: "Rejeter"
        },
        zh: {
            nav_home: "主页",
            nav_services: "服务",
            nav_reviews: "评价",
            nav_location: "营业时间与地址",
            nav_contact: "联系我们",
            hero_title: "优质护理<br>为您的衣物",
            hero_subtitle: "加的斯值得信赖的干洗店。每次洗涤都充满优雅、完美和细节。",
            hero_btn_services: "查看服务",
            hero_btn_visit: "访问我们",
            services_title: "服务与价格",
            services_desc: "采用最先进的技术提供专业护理，确保您的面料持久耐用和光彩照人。",
            service_1_name: "西装干洗",
            service_2_name: "衬衫熨烫",
            service_3_name: "羽绒被清洗",
            service_4_name: "派对礼服清洗",
            service_4_price: "40欧元起",
            service_5_name: "地毯清洗",
            service_5_price: "20欧元/平方米起",
            service_6_name: "高级月卡",
            reviews_title: "客户评价",
            reviews_desc: "将他们最珍贵的衣物托付给我们的人的见证。",
            review_1_text: "“无与伦比的待遇和无可挑剔的结果。我带了一套我以为已经毁了的西装，他们把它弄得像新的一样。强烈推荐。”",
            review_2_text: "“毫无疑问是加的斯最好的干洗店。速度、友善和专业水平都达到了很高的水平。我的衬衫总是完美的。”",
            review_3_text: "“十分满分的服务。他们清理了一件非常精致的外套，超出了我的期望。而且地方很漂亮，服务也很精致。”",
            review_4_text: "“太棒了。我委托他们清洗几件非常精致的衣物，结果令人惊叹。他们有了一个终身客户。”",
            location_title: "营业时间与地址",
            location_address_title: "地址",
            location_phone_title: "电话",
            location_hours_title: "营业时间",
            hours_weekdays: "周一 - 周五:",
            hours_saturday: "周六:",
            hours_sunday: "周日:",
            hours_closed: "休息",
            store_status_calc: "正在计算状态...",
            store_status_open: "营业中",
            store_status_closed: "休息中",
            contact_title: "联系我们",
            contact_desc: "您有任何疑问或需要特殊服务吗？请写信给我们。",
            contact_name: "全名",
            contact_email: "电子邮件",
            contact_message: "您的留言...",
            contact_legal: "我已阅读并接受隐私政策，并同意根据GDPR处理我的个人数据。我了解我可以随时撤销同意。",
            contact_submit: "发送留言",
            contact_sending: "发送中...",
            contact_sent: "留言已发送",
            footer_copyright: "© 2026 Punto Sec 高级干洗店。保留所有权利。",
            footer_legal: "法律声明",
            footer_privacy: "隐私政策",
            footer_cookies: "Cookie 政策",
            cookie_text: "我们使用我们自己和第三方的cookie来改善我们的服务，分析您的导航并为您提供个性化的体验。点击“接受”，即表示您同意其使用。",
            cookie_accept: "接受",
            cookie_reject: "拒绝"
        }
    };

    let currentLang = localStorage.getItem('preferredLang') || 'es';

    const updateTranslations = (lang) => {
        const dict = translations[lang];
        if (!dict) return;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.innerHTML = dict[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) el.placeholder = dict[key];
        });
        localStorage.setItem('preferredLang', lang);
        currentLang = lang;
        if (window.checkStoreStatusGlobally) window.checkStoreStatusGlobally();
    };

    // Custom Language Dropdown Logic
    const dropdownContainer = document.getElementById('lang-dropdown');
    const dropdownBtn = document.getElementById('lang-dropdown-btn');
    const dropdownItems = document.querySelectorAll('.custom-dropdown-item');

    if (dropdownContainer && dropdownBtn && dropdownItems.length > 0) {
        const langIcons = { es: '🇪🇸', en: '🇬🇧', de: '🇩🇪', fr: '🇫🇷', zh: '🇨🇳' };

        const updateDropdownUI = (lang) => {
            if (dropdownBtn.querySelector('.lang-icon') && dropdownBtn.querySelector('.lang-text')) {
                dropdownBtn.querySelector('.lang-icon').textContent = langIcons[lang] || '🇪🇸';
                dropdownBtn.querySelector('.lang-text').textContent = lang.toUpperCase();
            }

            dropdownItems.forEach(item => {
                if (item.getAttribute('data-value') === lang) {
                    item.classList.add('active');
                    item.setAttribute('aria-selected', 'true');
                } else {
                    item.classList.remove('active');
                    item.setAttribute('aria-selected', 'false');
                }
            });
        };

        // Initialize UI and Translations
        updateDropdownUI(currentLang);
        if (currentLang !== 'es') {
            updateTranslations(currentLang);
        }

        // Toggle dropdown on button click
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent document click from firing
            const isExpanded = dropdownBtn.getAttribute('aria-expanded') === 'true';
            dropdownBtn.setAttribute('aria-expanded', !isExpanded);
            dropdownContainer.classList.toggle('open');
        });

        // Handle language selection
        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                const selectedLang = item.getAttribute('data-value');
                if (selectedLang && selectedLang !== currentLang) {
                    updateTranslations(selectedLang);
                    updateDropdownUI(selectedLang);
                }
                dropdownBtn.setAttribute('aria-expanded', 'false');
                dropdownContainer.classList.remove('open');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdownContainer.contains(e.target)) {
                dropdownBtn.setAttribute('aria-expanded', 'false');
                dropdownContainer.classList.remove('open');
            }
        });
    }

    // 1. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

    mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });

    // 2. Sticky Header on Scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Cookie Banner Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    // Check if the user has already answered
    if (!localStorage.getItem('cookiesAccepted')) {
        // Show banner with a slight delay for better UX
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    const hideBanner = (status) => {
        cookieBanner.classList.remove('show');
        localStorage.setItem('cookiesAccepted', status);
    };

    acceptBtn.addEventListener('click', () => hideBanner('accepted'));
    rejectBtn.addEventListener('click', () => hideBanner('rejected'));

    // 4. Dynamic Store Status Logic
    const initStoreStatus = () => {
        const statusEl = document.getElementById('store-status');

        const checkStatus = () => {
            // Get current time in Madrid
            const madridTimeStr = new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid", hour: '2-digit', minute: '2-digit', hour12: false });
            const madridDayStr = new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid", weekday: 'short' }); // Mon, Tue...

            let [hour, minute] = madridTimeStr.split(':').map(Number);
            if (hour === 24) hour = 0;

            const timeFloat = hour + (minute / 60);

            const daysMap = {
                'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6
            };
            const currentDay = daysMap[madridDayStr] !== undefined ? daysMap[madridDayStr] : new Date().getDay();

            let isOpen = false;

            if (currentDay >= 1 && currentDay <= 5) {
                // Lunes a Viernes: 9:30-14:00 (9.5-14.0) y 17:00-20:00 (17.0-20.0)
                if ((timeFloat >= 9.5 && timeFloat < 14.0) || (timeFloat >= 17.0 && timeFloat < 20.0)) {
                    isOpen = true;
                }
            } else if (currentDay === 6) {
                // Sábado: 10:00-13:30 (10.0-13.5)
                if (timeFloat >= 10.0 && timeFloat < 13.5) {
                    isOpen = true;
                }
            }

            if (isOpen) {
                statusEl.className = 'status-badge status-open';
                const text = translations[currentLang] ? translations[currentLang].store_status_open : 'ABIERTO AHORA';
                statusEl.innerHTML = '<i class="fas fa-circle" style="font-size: 0.6rem; vertical-align: middle; margin-right: 6px;"></i> ' + text;
            } else {
                statusEl.className = 'status-badge status-closed';
                const text = translations[currentLang] ? translations[currentLang].store_status_closed : 'CERRADO AHORA';
                statusEl.innerHTML = '<i class="fas fa-circle" style="font-size: 0.6rem; vertical-align: middle; margin-right: 6px;"></i> ' + text;
            }
        };

        window.checkStoreStatusGlobally = checkStatus;

        checkStatus();
        setInterval(checkStatus, 60000);
    };

    initStoreStatus();

    // 5. Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = document.querySelector('.btn-submit');
        const originalText = btn.textContent;

        const sendingText = translations[currentLang] ? translations[currentLang].contact_sending : 'Enviando...';
        const sentText = translations[currentLang] ? translations[currentLang].contact_sent : 'Mensaje Enviado';

        btn.textContent = sendingText;
        btn.style.opacity = '0.8';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = sentText;
            btn.style.backgroundColor = '#27ae60';
            btn.style.borderColor = '#27ae60';
            btn.style.color = 'white';

            contactForm.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
                btn.style.color = '';
                btn.disabled = false;
                btn.style.opacity = '1';
            }, 3000);
        }, 1500);
    });

    // 6. Scroll Animation for Pricing Cards
    const animatedCards = document.querySelectorAll('.slide-up-anim');
    if (animatedCards.length > 0) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observerInstance.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedCards.forEach(card => observer.observe(card));
    }
});
