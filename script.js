document.addEventListener('DOMContentLoaded', () => {
    // 0. Translations
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_services: "Servicios",
            nav_reviews: "Reseñas",
            nav_location: "Horario y Ubicación",
            nav_promos: "Promociones",
            nav_contact: "Contacto",
            promo_modal_title: "PROMOCIÓN",
            promo_modal_btn: "Saber más",
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
            review_2_text: "\"Muy cómodo, sobre todo cuando se te acumula la colada a causa del mal tiempo, te la llevas lavada y seca.\"",
            review_3_text: "\"Servicio de 10. Limpiaron un abrigo muy delicado y superaron mis expectativas. Además el local es precioso y la atención es exquisita.\"",
            review_4_text: "\"Me dejaron la chaqueta de lujo! Servicio rápido!\"",
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
            cookie_reject: "Rechazar",
            // New: Footer Labels & Rules
            footer_rules_title: "Recomendaciones para el cliente",
            footer_labels_title: "Etiquetado para la limpieza de prendas",
            dry_cleaning_title: "Limpieza en Seco",
            wash_iron_title: "Agua y Planchado",
            label_solvents: "Disolventes corrientes",
            label_perclo: "Percloroetileno",
            label_triclo: "Tricloroetano",
            label_dry_caution: "Precaución: Aconsejable secado a máx. 45°",
            label_dry_prohibited: "Prohibido limpiar en seco",
            label_hand_wash: "Lavado a mano",
            label_machine_wash: "Lavar a máquina",
            label_water_prohibited: "Prohibido agua",
            label_iron_mild: "Suave 110º",
            label_iron_normal: "Normal 150º",
            label_iron_prohibited: "Prohibido planchar",
            label_bleach_ok: "Admite lejía",
            label_bleach_no: "Sin lejía",
            label_dryer: "Secadora",
            label_hang_dry: "Tender sin escurrir",
            recom_smoking: "Prohibido fumar.",
            recom_cash: "Solo efectivo.",
            recom_donation: "Las prendas no retiradas tras 1 año serán donadas a ONG.",
            recom_receipt: "Si no tiene el resguardo, debe rellenar un impreso.",
            recom_advance: "En alfombras y pieles se abonará el 50% por adelantado.",
            recom_measures: "No nos responsabilizamos de medidas tomadas por el cliente.",
            recom_items: "No somos responsables de botones, adornos o abalorios.",
            // New: Service Catalog (Special Services)
            sc_breadcrumb: "Volver a Servicios y Precios",
            sc_hero_badge: "Servicios Especiales",
            sc_hero_title: "Cuidado Experto Para Cada Prenda",
            sc_hero_subtitle: "Tratamientos avanzados y técnicas profesionales para las prendas que merecen una atención diferente.",
            sc_pill_experience: "Más de 20 años de experiencia",
            sc_pill_location: "Av. Andalucía 69, Cádiz",
            sc_01_name: "Etiquetas Personalizadas",
            sc_01_desc: "Marcado duradero para identificar tus prendas de forma segura.",
            sc_02_name: "Envasado al Vacío",
            sc_02_desc: "Optimizamos tu espacio. Conservación perfecta contra el polvo.",
            sc_03_name: "Barbour y Encerados",
            sc_03_desc: "Limpieza profunda y re-encerado original profesional.",
            sc_04_name: "Sofás y Colchones",
            sc_04_desc: "Higienización profunda in situ. Eliminamos ácaros y manchas.",
            sc_05_name: "Alta Peletería",
            sc_05_desc: "Tratamiento experto, hidratación y cuidado de pieles.",
            sc_06_name: "Tapicería General",
            sc_06_desc: "Restauración de cortinas, alfombras y tejidos del hogar.",
            sc_07_name: "Trajes de Flamenca",
            sc_07_desc: "Cuidado minucioso de volantes y aprestos impecables.",
            sc_08_name: "Trajes de Comunión",
            sc_08_desc: "Delicadeza absoluta para prendas y tejidos nobles.",
            sc_chip_available: "Servicio disponible",
            sc_chip_prepago: "Pago 50% adelantado",
            sc_chip_home: "Servicio a domicilio",
            sc_chip_flamenca: "Especialidad Andaluza",
            sc_chip_love: "Máxima delicadeza",
            sc_cta_eyebrow: "Estamos en Cádiz",
            sc_cta_title: "¿No encuentras lo que buscas?<br><span>Ven a Punto Sec y lo hablamos</span>",
            sc_cta_text: "Para servicios especiales o presupuestos personalizados, nuestro equipo te atenderá con toda la atención que mereces.",
            sc_cta_btn_phone: "Llámanos ahora",
            sc_cta_btn_store: "Ver horarios y ubicación",
            sc_cta_strip_hours: "Lunes–Viernes: 9:30–14:00 y 17:30–20:30",
            sc_cta_strip_sat: "Sábados: 10:00–13:30",
            sc_cta_strip_addr: "Av. Andalucía 69, Cádiz",
            // New: Promotions
            promo_status_no_active: "No activa",
            promo_01_title: "Restaura tu Barbour",
            promo_01_text: "Devuelve a tu prenda su impermeabilidad original con nuestro servicio artesanal.",
            promo_02_title: "Promoción 3x2",
            promo_02_text: "Trae tres prendas y paga solo dos en limpieza textil.",
            promo_03_title: "Sorteo Bienestar",
            promo_03_text: "Gana sesiones de Spa con cualquier servicio de tintorería.",
            promo_04_title: "Cena Premium",
            promo_04_text: "Participa en el sorteo de una cena para dos en Cádiz.",
            promo_btn_more: "Saber más",
            promo_btn_request: "Solicitar promoción",
            promo_btn_participate: "Participar",
            // New: Legal & Shared UI
            btn_back: "Volver al Inicio",
            legal_title_aviso: "Aviso Legal",
            legal_title_privacy: "Política de Privacidad",
            legal_title_cookies: "Política de Cookies"
        },
        en: {
            nav_home: "Home",
            nav_services: "Services",
            nav_reviews: "Reviews",
            nav_location: "Hours & Location",
            nav_promos: "Promotions",
            nav_contact: "Contact",
            promo_modal_title: "PROMOTION",
            promo_modal_btn: "Learn more",
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
            review_1_text: "\"Unbeatable treatment and impeccable results. I brought a suit I thought was lost and they left it like new.\"",
            review_2_text: "\"The best dry cleaner in Cádiz without a doubt. Speed, friendliness, and professionalism.\"",
            review_3_text: "\"10/10 service. They cleaned a very delicate coat and exceeded my expectations.\"",
            review_4_text: "\"Fantastic. I entrusted them with cleaning several very delicate garments and the result was spectacular.\"",
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
            contact_desc: "Do you have any questions? Write to us.",
            contact_name: "Full name",
            contact_email: "Email address",
            contact_message: "Your message...",
            contact_legal: "I have read and accept the Privacy Policy and consent to the processing of my data.",
            contact_submit: "Send Message",
            contact_sending: "Sending...",
            contact_sent: "Message Sent",
            footer_copyright: "© 2026 Punto Sec Premium Dry Cleaner. All rights reserved.",
            footer_legal: "Legal Notice",
            footer_privacy: "Privacy Policy",
            footer_cookies: "Cookie Policy",
            cookie_text: "We use our own and third-party cookies to improve our services and offer you a personalized experience.",
            cookie_accept: "Accept",
            cookie_reject: "Reject",
            footer_rules_title: "Shop Rules",
            footer_labels_title: "Care Labeling Guide",
            dry_cleaning_title: "Dry Cleaning",
            wash_iron_title: "Wash & Iron",
            label_solvents: "Normal solvents",
            label_perclo: "Percloroetileno",
            label_triclo: "Tricloroetano",
            label_dry_caution: "Caution: Recommended drying at max 45°",
            label_dry_prohibited: "Do not dry clean",
            label_hand_wash: "Hand wash only",
            label_machine_wash: "Machine wash",
            label_water_prohibited: "Do not wash in water",
            label_iron_mild: "Mild iron 110º",
            label_iron_normal: "Normal iron 150º",
            label_iron_prohibited: "Do not iron",
            label_bleach_ok: "Bleach allowed",
            label_bleach_no: "Do not bleach",
            label_dryer: "Tumble dry",
            label_hang_dry: "Hang to dry",
            recom_smoking: "No smoking.",
            recom_cash: "Cash only.",
            recom_donation: "Items left for >1 year will be donated to NGOs.",
            recom_receipt: "If the receipt is lost, you must fill out a form.",
            recom_advance: "50% upfront for carpets and fur items.",
            recom_measures: "We are not responsible for measures taken by clients.",
            recom_items: "We are not responsible for buttons or ornaments.",
            sc_breadcrumb: "Back to All Services",
            sc_hero_badge: "Special Services",
            sc_hero_title: "Expert Care For Every Garment",
            sc_hero_subtitle: "Advanced treatments and professional techniques for garments that deserve special attention.",
            sc_pill_experience: "Over 20 years experience",
            sc_pill_location: "Av. Andalucía 69, Cádiz",
            sc_01_name: "Custom Labels",
            sc_01_desc: "Durable marking to identify your garments safely.",
            sc_02_name: "Vacuum Packaging",
            sc_02_desc: "Optimize your space. Perfect protection against dust.",
            sc_03_name: "Barbour & Waxed",
            sc_03_desc: "Deep cleaning and professional re-waxing service.",
            sc_04_name: "Sofas & Mattresses",
            sc_04_desc: "Deep cleaning on site. We remove mites and stains.",
            sc_05_name: "High Furriery",
            sc_05_desc: "Expert treatment, hydration and leather care.",
            sc_06_name: "General Upholstery",
            sc_06_desc: "Restoration of curtains, carpets and home fabrics.",
            sc_07_name: "Flamenco Dresses",
            sc_07_desc: "Meticulous care for ruffles and starching.",
            sc_08_name: "Communion Suits",
            sc_08_desc: "Absolute delicacy for noble fabrics.",
            sc_chip_available: "Service available",
            sc_chip_prepago: "50% advance payment",
            sc_chip_home: "Home service",
            sc_chip_flamenca: "Andalusian Specialty",
            sc_chip_love: "Maximum delicacy",
            sc_cta_eyebrow: "We are in Cádiz",
            sc_cta_title: "Can't find what you're looking for?<br><span>Visit us and let's talk</span>",
            sc_cta_text: "For special services or custom quotes, our team will provide the attention you deserve.",
            sc_cta_btn_phone: "Call us now",
            sc_cta_btn_store: "See hours & location",
            sc_cta_strip_hours: "Monday–Friday: 9:30–14:00 & 17:30–20:30",
            sc_cta_strip_sat: "Saturdays: 10:00–13:30",
            sc_cta_strip_addr: "Av. Andalucía 69, Cádiz",
            promo_status_no_active: "Inactive",
            promo_01_title: "Restore your Barbour",
            promo_01_text: "Restore your garment's original waterproofing with our craft service.",
            promo_02_title: "3x2 Promotion",
            promo_02_text: "Bring three items and pay for only two in textile cleaning.",
            promo_03_title: "Wellness Giveaway",
            promo_03_text: "Win Spa sessions with any dry cleaning service.",
            promo_04_title: "Premium Dinner",
            promo_04_text: "Enter the draw for a dinner for two in Cádiz.",
            promo_btn_more: "Learn more",
            promo_btn_request: "Request promotion",
            promo_btn_participate: "Enter draw",
            btn_back: "Back to Home",
            legal_title_aviso: "Legal Notice",
            legal_title_privacy: "Privacy Policy",
            legal_title_cookies: "Cookie Policy"
        },
        de: {
            nav_home: "Startseite",
            nav_services: "Leistungen",
            nav_reviews: "Bewertungen",
            nav_location: "Zeiten & Ort",
            nav_promos: "Aktionen",
            nav_contact: "Kontakt",
            promo_modal_title: "AKTION",
            promo_modal_btn: "Mehr erfahren",
            hero_title: "Premium-Pflege<br>Für Ihre Kleidung",
            hero_subtitle: "Die vertrauenswürdige Reinigung in Cádiz. Eleganz und Detail in jeder Wäsche.",
            hero_btn_services: "Leistungen sehen",
            hero_btn_visit: "Besuchen Sie uns",
            services_title: "Leistungen und Preise",
            services_desc: "Expertenpflege mit modernsten Techniken für maximale Haltbarkeit Ihrer Stoffe.",
            service_1_name: "Anzug-Chemische Reinigung",
            service_2_name: "Hemden bügeln",
            service_3_name: "Bettdeckenreinigung",
            service_4_name: "Abendkleid waschen",
            service_4_price: "Ab 40€",
            service_5_name: "Teppichreinigung",
            service_5_price: "Ab 20€/m²",
            service_6_name: "Premium Monatspass",
            reviews_title: "Was unsere Kunden sagen",
            reviews_desc: "Erfahrungsberichte von denen, die uns ihre wertvollsten Stücke anvertrauen.",
            review_1_text: "\"Unschlagbare Behandlung und makellose Ergebnisse. Mein Anzug sieht aus wie neu.\"",
            review_2_text: "\"Ohne Zweifel die beste Reinigung in Cádiz. Schnelligkeit und Professionalität.\"",
            review_3_text: "\"10/10 Service. Sie haben meine Erwartungen übertroffen. Wunderschöner Laden.\"",
            review_4_text: "\"Fantastisch. Ich habe ihnen empfindliche Kleidung anvertraut und das Ergebnis war spektakulär.\"",
            location_title: "Zeiten & Ort",
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
            contact_title: "Kontakt",
            contact_desc: "Haben Sie Fragen? Schreiben Sie uns.",
            contact_name: "Vollständiger Name",
            contact_email: "E-Mail-Adresse",
            contact_message: "Ihre Nachricht...",
            contact_legal: "Ich acceptiere die Datenschutzrichtlinie und die Verarbeitung meiner Daten.",
            contact_submit: "Nachricht senden",
            contact_sending: "Reicht...",
            contact_sent: "Nachricht gesendet",
            footer_copyright: "© 2026 Punto Sec Premium-Reinigung. Alle Rechte vorbehalten.",
            footer_legal: "Rechtlicher Hinweis",
            footer_privacy: "Datenschutzerklärung",
            footer_cookies: "Cookie-Richtlinie",
            cookie_text: "Wir verwenden Cookies, um unsere Dienste zu verbessern und Ihnen ein personalisiertes Erlebnis zu bieten.",
            cookie_accept: "Akzeptieren",
            cookie_reject: "Ablehnen",
            footer_rules_title: "Hausordnung",
            footer_labels_title: "Pflegekennzeichnung",
            dry_cleaning_title: "Chemische Reinigung",
            wash_iron_title: "Wasser & Bügeln",
            label_solvents: "Normalreinigung",
            label_perclo: "Perchloräthylen",
            label_triclo: "Trichloräthan",
            label_dry_caution: "Vorsicht: Trocknen bei max 45°",
            label_dry_prohibited: "Nicht chemisch reinigen",
            label_hand_wash: "Handwäsche",
            label_machine_wash: "Maschinenwäsche",
            label_water_prohibited: "Nicht nass reinigen",
            label_iron_mild: "Bügeln 110º",
            label_iron_normal: "Bügeln 150º",
            label_iron_prohibited: "Nicht bügeln",
            label_bleach_ok: "Bleichen erlaubt",
            label_bleach_no: "Nicht bleichen",
            label_dryer: "Wäschetrockner",
            label_hang_dry: "Hängend trocknen",
            recom_smoking: "Rauchen verboten.",
            recom_cash: "Nur Barzahlung.",
            recom_donation: "Nach 1 Jahr nicht abgeholte Kleidung wird gespendet.",
            recom_receipt: "Ohne Beleg muss ein Formular ausgefüllt werden.",
            recom_advance: "50% Anzahlung für Teppiche und Leder.",
            recom_measures: "Keine Haftung für Kundenmaße.",
            recom_items: "Keine Haftung für Knöpfe oder Verzierungen.",
            sc_breadcrumb: "Zurück zu allen Leistungen",
            sc_hero_badge: "Spezielle Leistungen",
            sc_hero_title: "Expertenpflege für jedes Kleidungsstück",
            sc_hero_subtitle: "Fortschrittliche Behandlungen für Kleidung, die besondere Aufmerksamkeit verdient.",
            sc_pill_experience: "Über 20 Jahre Erfahrung",
            sc_pill_location: "Av. Andalucía 69, Cádiz",
            sc_01_name: "Individuelle Etiketten",
            sc_01_desc: "Langlebige Kennzeichnung zur sicheren Identifizierung Ihrer Kleidung.",
            sc_02_name: "Vakuumverpackung",
            sc_02_desc: "Platzoptimierung. Perfekter Schutz vor Staub.",
            sc_03_name: "Barbour & Wachs",
            sc_03_desc: "Tiefenreinigung und professionelles Nachwachsen.",
            sc_04_name: "Sofas & Matratzen",
            sc_04_desc: "Tiefenreinigung vor Ort. Wir entfernen Milben.",
            sc_05_name: "Pelzpflege",
            sc_05_desc: "Expertenbehandlung und Lederpflege.",
            sc_06_name: "Polsterei",
            sc_06_desc: "Restaurierung von Vorhängen und Heimtextilien.",
            sc_07_name: "Flamenco-Kleider",
            sc_07_desc: "Sorgfältige Pflege von Rüschen und Stärke.",
            sc_08_name: "Kommunionanzüge",
            sc_08_desc: "Absolute Zartheit für edle Stoffe.",
            sc_chip_available: "Service verfügbar",
            sc_chip_prepago: "50% Vorauszahlung",
            sc_chip_home: "Hausservice",
            sc_chip_flamenca: "Spezialität aus Andalusien",
            sc_chip_love: "Höchste Zartheit",
            sc_cta_eyebrow: "Wir sind in Cádiz",
            sc_cta_title: "Nicht gefunden?<br><span>Besuchen Sie uns</span>",
            sc_cta_text: "Für Sonderleistungen oder Angebote steht Ihnen unser Team zur Verfügung.",
            sc_cta_btn_phone: "Rufen Sie uns an",
            sc_cta_btn_store: "Öffnungszeiten sehen",
            sc_cta_strip_hours: "Montag–Freitag: 9:30–14:00 & 17:30–20:30",
            sc_cta_strip_sat: "Samstags: 10:00–13:30",
            sc_cta_strip_addr: "Av. Andalucía 69, Cádiz",
            promo_status_no_active: "Inaktiv",
            promo_01_title: "Barbour restaurieren",
            promo_01_text: "Originale Imprägnierung durch unseren Handwerksservice.",
            promo_02_title: "3 zum Preis von 2",
            promo_02_text: "Bringen Sie drei Teile und zahlen Sie nur zwei.",
            promo_03_title: "Wellness-Gewinnspiel",
            promo_03_text: "Gewinnen Sie Spa-Tage mit jeder Reinigung.",
            promo_04_title: "Premium-Dinner",
            promo_04_text: "Verlosung eines Abendessens in Cádiz.",
            promo_btn_more: "Mehr erfahren",
            promo_btn_request: "Aktion anfragen",
            promo_btn_participate: "Mitmachen",
            btn_back: "Zurück zur Startseite",
            legal_title_aviso: "Rechtlicher Hinweis",
            legal_title_privacy: "Datenschutzerklärung",
            legal_title_cookies: "Cookie-Richtlinie"
        },
        fr: {
            nav_home: "Accueil",
            nav_services: "Services",
            nav_reviews: "Avis",
            nav_location: "Horaires & Lieu",
            nav_promos: "Promotions",
            nav_contact: "Contact",
            promo_modal_title: "PROMOTION",
            promo_modal_btn: "En savoir plus",
            hero_title: "Soin Premium<br>Pour Vos Vêtements",
            hero_subtitle: "Le pressing de confiance à Cadix. Élégance et détail dans chaque lavage.",
            hero_btn_services: "Voir les Services",
            hero_btn_visit: "Nous Visiter",
            services_title: "Services et Prix",
            services_desc: "Un soin expert avec les techniques les plus avancées pour vos tissus.",
            service_1_name: "Nettoyage à sec de costume",
            service_2_name: "Repassage de chemise",
            service_3_name: "Nettoyage de couette",
            service_4_name: "Lavage de robe de soirée",
            service_4_price: "À partir de 40€",
            service_5_name: "Nettoyage de tapis",
            service_5_price: "À partir de 20€/m²",
            service_6_name: "Abonnement Mensuel",
            reviews_title: "L'avis des clients",
            reviews_desc: "Témoignages de ceux qui nous font confiance.",
            review_1_text: "\"Traitement imbattable et résultats impeccables. Mon costume est comme neuf.\"",
            review_2_text: "\"Le meilleur pressing de Cadix. Rapidité et professionnalisme.\"",
            review_3_text: "\"Service 10/10. Ils ont nettoyé un manteau très délicat parfaitement.\"",
            review_4_text: "\"Fantastique. J'ai confié des vêtements délicats et le résultat est superbe.\"",
            location_title: "Horaires & Lieu",
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
            contact_title: "Contact",
            contact_desc: "Des questions ? Écrivez-nous.",
            contact_name: "Nom complet",
            contact_email: "Adresse e-mail",
            contact_message: "Votre message...",
            contact_legal: "J'accepte la politique de confidentialité et le traitement de mes données.",
            contact_submit: "Envoyer Message",
            contact_sending: "Envoi...",
            contact_sent: "Message envoyé",
            footer_copyright: "© 2026 Punto Sec Pressing Premium. Tous droits réservés.",
            footer_legal: "Avis Légal",
            footer_privacy: "Confidentialité",
            footer_cookies: "Cookies",
            cookie_text: "Nous utilisons des cookies pour améliorer nos services et vos offrir une expérience personnalisée.",
            cookie_accept: "Accepter",
            cookie_reject: "Refuser",
            footer_rules_title: "Règles du magasin",
            footer_labels_title: "Guide d'entretien",
            dry_cleaning_title: "Nettoyage à Sec",
            wash_iron_title: "Eau & Repassage",
            label_solvents: "Solvants normaux",
            label_perclo: "Perchloréthylène",
            label_triclo: "Trichloréthane",
            label_dry_caution: "Attention: Séchage à max 45°",
            label_dry_prohibited: "Ne pas nettoyer à sec",
            label_hand_wash: "Lavage à la main",
            label_machine_wash: "Lavage machine",
            label_water_prohibited: "Ne pas laver à l'eau",
            label_iron_mild: "Repassage 110º",
            label_iron_normal: "Repassage 150º",
            label_iron_prohibited: "Ne pas repasser",
            label_bleach_ok: "Eau de javel permise",
            label_bleach_no: "Pas d'eau de javel",
            label_dryer: "Sèche-linge",
            label_hang_dry: "Étendre sans essorer",
            recom_smoking: "Interdit de fumer.",
            recom_cash: "Espèces uniquement.",
            recom_donation: "Les articles non retirés après 1 an seront donnés.",
            recom_receipt: "Sans ticket, vous devez remplir un formulaire.",
            recom_advance: "50% d'acompte pour tapis et fourrures.",
            recom_measures: "Nous ne sommes pas responsables des mesures clients.",
            recom_items: "Pas responsable des boutons ou ornements.",
            sc_breadcrumb: "Retour aux services",
            sc_hero_badge: "Services Spéciaux",
            sc_hero_title: "Soin Expert pour chaque Vêtement",
            sc_hero_subtitle: "Traitements avancés pour les vêtements qui méritent une attention particulière.",
            sc_pill_experience: "Plus de 20 ans d'expérience",
            sc_pill_location: "Av. Andalucía 69, Cadix",
            sc_01_name: "Étiquettes Perso",
            sc_01_desc: "Marquage durable pour identifier vos vêtements.",
            sc_02_name: "Mise sous vide",
            sc_02_desc: "Optimisez votre espace. Protection contre la poussière.",
            sc_03_name: "Barbour & Cirés",
            sc_03_desc: "Nettoyage profond et re-cirage professionnel.",
            sc_04_name: "Canapés & Matelas",
            sc_04_desc: "Nettoyage à domicile. Nous éliminons les acariens.",
            sc_05_name: "Haute Pelleterie",
            sc_05_desc: "Traitement expert et soin du cuir.",
            sc_06_name: "Tapisserie",
            sc_06_desc: "Restauration de rideaux, tapis et tissus d'ameublement.",
            sc_07_name: "Robes de Flamenco",
            sc_07_desc: "Soin des volants et de l'apprêt impeccable.",
            sc_08_name: "Costumes Communion",
            sc_08_desc: "Délicatesse absolue pour tissus nobles.",
            sc_chip_available: "Service disponible",
            sc_chip_prepago: "Acompte de 50%",
            sc_chip_home: "Service à domicile",
            sc_chip_flamenca: "Spécialité Andalouse",
            sc_chip_love: "Délicatesse maximale",
            sc_cta_eyebrow: "Nous sommes à Cadix",
            sc_cta_title: "Pas trouvé ?<br><span>Venez nous voir</span>",
            sc_cta_text: "Pour des services spéciaux, notre équipe est à votre disposition.",
            sc_cta_btn_phone: "Appelez-nous",
            sc_cta_btn_store: "Voir horaires",
            sc_cta_strip_hours: "Lundi–Vendredi: 9:30–14:00 & 17:30–20:30",
            sc_cta_strip_sat: "Samedis: 10:00–13:30",
            sc_cta_strip_addr: "Av. Andalucía 69, Cadiz",
            promo_status_no_active: "Inactif",
            promo_01_title: "Restaurer Barbour",
            promo_01_text: "Restaurer l'imperméabilité d'origine de votre vêtement.",
            promo_02_title: "Promotion 3x2",
            promo_02_text: "Apportez trois articles et n'en payez que deux.",
            promo_03_title: "Tirage au sort Spa",
            promo_03_text: "Gagnez des sessions Spa avec tout nettoyage.",
            promo_04_title: "Dîner Premium",
            promo_04_text: "Gagnez un dîner pour deux personnes à Cadix.",
            promo_btn_more: "En savoir plus",
            promo_btn_request: "Demander promo",
            promo_btn_participate: "Participer",
            btn_back: "Retour à l'accueil",
            legal_title_aviso: "Mentions Légales",
            legal_title_privacy: "Confidentialité",
            legal_title_cookies: "Politique Cookies"
        },
        zh: {
            nav_home: "主页",
            nav_services: "服务",
            nav_reviews: "评价",
            nav_location: "营业时间",
            nav_promos: "促销",
            nav_contact: "联系我们",
            promo_modal_title: "促销",
            promo_modal_btn: "了解更多",
            hero_title: "优质护理<br>为您的衣物",
            hero_subtitle: "加的斯值得信赖的干洗店。每次洗涤都充滿细节。",
            hero_btn_services: "查看服务",
            hero_btn_visit: "访问我们",
            services_title: "服务与价格",
            services_desc: "专业护理与先进技术，确保面料光彩。",
            service_1_name: "西装干洗",
            service_2_name: "衬衫熨烫",
            service_3_name: "羽绒被清洗",
            service_4_name: "晚礼服清洗",
            service_4_price: "40€起",
            service_5_name: "地毯清洗",
            service_5_price: "20€/m²起",
            service_6_name: "高级月卡",
            reviews_title: "客户评价",
            reviews_desc: "信赖我们的客户见证。",
            review_1_text: "“西装像新的一样。强烈推荐。”",
            review_2_text: "“加的斯最好的干洗店。非常专业。”",
            review_3_text: "“10/10服务。超出了我的期望。”",
            review_4_text: "“太棒了。清洗效果令人惊叹。”",
            location_title: "营业时间",
            location_address_title: "地址",
            location_phone_title: "电话",
            location_hours_title: "营业时间",
            hours_weekdays: "周一 - 周五:",
            hours_saturday: "周六:",
            hours_sunday: "周日:",
            hours_closed: "休息",
            store_status_calc: "正在计算...",
            store_status_open: "营业中",
            store_status_closed: "休息中",
            contact_title: "联系我们",
            contact_desc: "有疑问？请联系我们。",
            contact_name: "姓名",
            contact_email: "电邮",
            contact_message: "您的留言...",
            contact_legal: "我同意隐私政策并同意处理我的数据。",
            contact_submit: "发送",
            contact_sending: "发送中...",
            contact_sent: "已发送",
            footer_copyright: "© 2026 Punto Sec 高级干洗店。版权所有。",
            footer_legal: "法律声明",
            footer_privacy: "隐私政策",
            footer_cookies: "Cookie 政策",
            cookie_text: "我们使用cookie以提供更好的体验。",
            cookie_accept: "接受",
            cookie_reject: "拒绝",
            footer_rules_title: "店内规定",
            footer_labels_title: "洗涤标签指南",
            dry_cleaning_title: "干洗",
            wash_iron_title: "水洗和熨烫",
            label_solvents: "普通溶剂",
            label_perclo: "四氯乙烯",
            label_triclo: "三氯乙烷",
            label_dry_caution: "注意：最高45°烘干",
            label_dry_prohibited: "不可干洗",
            label_hand_wash: "手洗",
            label_machine_wash: "机洗",
            label_water_prohibited: "不可水洗",
            label_iron_mild: "低温熨烫 110º",
            label_iron_normal: "中温熨烫 150º",
            label_iron_prohibited: "不可熨烫",
            label_bleach_ok: "可漂白",
            label_bleach_no: "不可漂白",
            label_dryer: "烘干",
            label_hang_dry: "悬挂晾干",
            recom_smoking: "禁止吸烟。",
            recom_cash: "仅限现金。",
            recom_donation: "超过1年未领取的衣物将捐赠。",
            recom_receipt: "如无收据需填写表格。",
            recom_advance: "地毯和皮草需预付50%。",
            recom_measures: "不对客户自测尺寸负责。",
            recom_items: "不对纽扣或饰品负责。",
            sc_breadcrumb: "返回服务列表",
            sc_hero_badge: "特殊服务",
            sc_hero_title: "专业护理每件衣物",
            sc_hero_subtitle: "为需要特殊处理的衣物提供先进技术。",
            sc_pill_experience: "20年专业经验",
            sc_pill_location: "加的斯，Av. Andalucía 69",
            sc_01_name: "个性化标签",
            sc_01_desc: "持久标记，安全识别您的衣物。",
            sc_02_name: "真空包装",
            sc_02_desc: "节省空间，防尘保护。",
            sc_03_name: "Barbour 和涂层衣物",
            sc_03_desc: "深层清洁和专业补蜡。",
            sc_04_name: "上门清洗沙发床垫",
            sc_04_desc: "上门清洁。去除螨虫和污渍。",
            sc_05_name: "皮草护理",
            sc_05_desc: "专家护理，皮革保湿。",
            sc_06_name: "普通软装",
            sc_06_desc: "窗帘、地毯和家纺修复。",
            sc_07_name: "弗拉门戈裙",
            sc_07_desc: "精细护理荷叶边。",
            sc_08_name: "洗礼/圣餐服",
            sc_08_desc: "对名贵面料极致细心。",
            sc_chip_available: "服务可用",
            sc_chip_prepago: "需预付50%",
            sc_chip_home: "上门服务",
            sc_chip_flamenca: "安达卢西亚特色",
            sc_chip_love: "极致呵护",
            sc_cta_eyebrow: "我们在加的斯",
            sc_cta_title: "没找到您需要的？<br><span>来找我们聊聊</span>",
            sc_cta_text: "有关特殊服务或定制报价，我们将竭诚为您服务。",
            sc_cta_btn_phone: "立即致电",
            sc_cta_btn_store: "查看营业时间",
            sc_cta_strip_hours: "周一–周五: 9:30–14:00 和 17:30–20:30",
            sc_cta_strip_sat: "周六: 10:00–13:30",
            sc_cta_strip_addr: "加的斯，Av. Andalucía 69",
            promo_status_no_active: "未激活",
            promo_01_title: "修复您的 Barbour",
            promo_01_text: "通过我们的工艺修复衣物的原始防水性能。",
            promo_02_title: "三免一促销",
            promo_02_text: "带来三件衣物，只需支付两件的费用。",
            promo_03_title: "健康抽奖",
            promo_03_text: "享受干洗服务即可赢取水疗课程。",
            promo_04_title: "高级晚餐",
            promo_04_text: "参加加的斯双人晚餐抽奖。",
            promo_btn_more: "了解更多",
            promo_btn_request: "申请促销",
            promo_btn_participate: "参加",
            btn_back: "返回主页",
            legal_title_aviso: "法律声明",
            legal_title_privacy: "隐私政策",
            legal_title_cookies: "Cookie 政策"
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
                // Lunes a Viernes: 9:30-14:00 (9.5-14.0) y 17:30-20:30 (17.5-20.5)
                if ((timeFloat >= 9.5 && timeFloat < 14.0) || (timeFloat >= 17.5 && timeFloat < 20.5)) {
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
    if (contactForm) {
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
    }

    // 6. Scroll Animation for Pricing Cards & Promo Cards
    const animatedCards = document.querySelectorAll('.slide-up-anim, .scroll-reveal');
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

    // 7. Promotional Modal Logic
    const promoModal = document.getElementById('promo-modal');
    if (promoModal) {
        const promoCloseBtn = document.getElementById('promo-close-btn');

        let hasScrolled = false;
        let promoTriggered = false;

        const triggerPromo = () => {
            hasScrolled = true;
            if (!promoTriggered) {
                promoTriggered = true;
                setTimeout(() => {
                    promoModal.classList.add('show');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling while open
                }, 3000); // Aparece a los 3 segundos
            }
        };

        // Activa el modal al hacer scroll la primera vez en la sesión actual
        window.addEventListener('scroll', triggerPromo, { once: true });

        // Close modal logic
        const closePromoModal = () => {
            promoModal.classList.remove('show');
            document.body.style.overflow = '';
        };

        promoCloseBtn.addEventListener('click', closePromoModal);

        // Also close if clicked outside content
        promoModal.addEventListener('click', (e) => {
            if (e.target === promoModal) {
                closePromoModal();
            }
        });
    }
});
