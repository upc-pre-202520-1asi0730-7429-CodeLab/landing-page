/**
 * Translations for the landing page.
 * This object contains translations for various text elements on the landing page.
 * For simplicity, only English and Spanish are included here.
 * You can expand this object to include more languages as needed.
 */
const translations = {
    en: {
        // Header
        home: "Home",
        about: "About",
        pricing: "Pricing",
        resources: "Resources",
        contact: "Contact",
        login: "Login",
        signup: "Sign Up",

        // Hero Section
        heroTitle: "Manage Your Hostel with Ease",
        heroText: "Hostel Manager centralizes bookings, guests, and services in one simple platform.",
        getStarted: "Get Started",

        // About
        aboutTitle: "About Hostel Manager",
        aboutText: "Our platform offers powerful tools to make hostel management simple and efficient. Here are some of the key features:",
        feature1Title: "Real-time Booking Management",
        feature1Text: "Avoid overbooking and manage room availability easily.",
        feature2Title: "Automated Invoicing & Receipts",
        feature2Text: "Automatically generate receipts and invoices for all payments, integrated with secure gateways like PayPal and Stripe.",
        feature3Title: "Guest Reviews & Ratings",
        feature3Text: "Encourage direct feedback from guests to continuously improve the hostel experience.",
        feature4Title: "Promotions & Discounts",
        feature4Text: "Create flexible pricing plans to attract more clients.",
        feature5Title: "Reports & Analytics",
        feature5Text: "Monitor occupancy, revenue, and usage of additional services.",
        feature6Title: "Mobile & Remote Access",
        feature6Text: "Manage your hostel from any device, anywhere.",

        // Steps
        stepsTitle: "How It Works",
        step1: "Sign Up & Set Up Your Hostel",
        step2: "Manage Bookings & Services",
        step3: "Analyze Reports & Optimize Revenue",

        // Pricing
        pricingTitle: "Subscription Plans",
        pricingText: "Choose the plan that best fits your hostel’s needs. Simple and transparent pricing, no hidden fees.",
        planBasicName: "Basic",
        planBasicPrice: "$29.90/month",
        planBasicFeature1: "Up to 50 rooms and bookings",
        planBasicFeature2: "Basic guest management",
        planBasicFeature3: "Monthly occupancy reports",
        planBasicFeature4: "Integrated with PayPal, Stripe, MercadoPago",
        planBasicFeature5: "Automatic notifications to clients (email, WhatsApp, push)",
        planBasicButton: "Get Started",
        planStandardName: "Standard",
        planStandardPrice: "$59.90/month",
        planStandardFeature1: "Everything in Basic",
        planStandardFeature2: "Up to 150 rooms",
        planStandardFeature3: "Room service management (breakfast, cleaning, laundry)",
        planStandardFeature4: "Promotions and discounts",
        planStandardFeature5: "Weekly financial reports",
        planStandardButton: "Get Started",
        planPremiumName: "Premium",
        planPremiumPrice: "$119.90/month",
        planPremiumFeature1: "Everything in Standard",
        planPremiumFeature2: "Up to 450 rooms",
        planPremiumFeature3: "Advanced dashboard with statistics",
        planPremiumFeature4: "Predictive analytics for occupancy and pricing",
        planPremiumFeature5: "Automatic client notifications",
        planPremiumButton: "Contact Us",

        // CTA
        ctaTitle: "Ready to Get Started?",
        ctaText: "Join hundreds of hostel owners already simplifying their management with our platform.",
        ctaButton: "Start Free Trial",

        // Footer
        FAQ: "FAQ",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        copy: "© 2025 Hostel Manager. All rights reserved."
    },
    es: {
        // Header
        home: "Inicio",
        about: "Acerca de",
        pricing: "Precios",
        resources: "Recursos",
        contact: "Contacto",
        login: "Iniciar sesión",
        signup: "Registrarse",

        // Hero Section
        heroTitle: "Gestiona tu hostal con facilidad",
        heroText: "Hostel Manager te ayuda a organizar reservas, clientes y servicios en una sola plataforma sencilla.",
        getStarted: "Comenzar",

        // About
        aboutTitle: "Acerca de Hostel Manager",
        aboutText: "Nuestra plataforma ofrece herramientas potentes para simplificar y hacer eficiente la gestión de hostales. Aquí están algunas de las funciones clave:",
        feature1Title: "Gestión de Reservas en Tiempo Real",
        feature1Text: "Evita sobreventas y gestiona la disponibilidad de habitaciones fácilmente.",
        feature2Title: "Facturación y Recibos Automáticos",
        feature2Text: "Genera automáticamente recibos y facturas, integrados con pasarelas seguras como PayPal y Stripe.",
        feature3Title: "Opiniones y Calificaciones de Huéspedes",
        feature3Text: "Fomenta retroalimentación directa de los huéspedes para mejorar continuamente la experiencia.",
        feature4Title: "Promociones y Descuentos",
        feature4Text: "Crea planes de precios flexibles para atraer más clientes.",
        feature5Title: "Reportes y Analíticas",
        feature5Text: "Monitorea ocupación, ingresos y uso de servicios adicionales.",
        feature6Title: "Acceso Móvil y Remoto",
        feature6Text: "Gestiona tu hostal desde cualquier dispositivo, en cualquier lugar.",

        // Steps
        stepsTitle: "Cómo Funciona",
        step1: "Regístrate y configura tu hostal",
        step2: "Gestiona reservas y servicios",
        step3: "Analiza reportes y optimiza ingresos",

        // Pricing
        pricingTitle: "Planes de Suscripción",
        pricingText: "Elige el plan que mejor se adapte a las necesidades de tu hostal. Precios simples y transparentes, sin costos ocultos.",
        planBasicName: "Básico",
        planBasicPrice: "S/.99.90/mes",
        planBasicFeature1: "Hasta 50 habitaciones y reservas",
        planBasicFeature2: "Gestión básica de huéspedes",
        planBasicFeature3: "Reportes mensuales de ocupación",
        planBasicFeature4: "Integrado con PayPal, Stripe, MercadoPago",
        planBasicFeature5: "Notificaciones automáticas a clientes (correo, WhatsApp, push)",
        planBasicButton: "Comenzar",
        planStandardName: "Estándar",
        planStandardPrice: "S/.199.90/mes",
        planStandardFeature1: "Todo lo del Básico",
        planStandardFeature2: "Hasta 150 habitaciones",
        planStandardFeature3: "Gestión de room service (desayuno, limpieza, lavandería)",
        planStandardFeature4: "Promociones y descuentos",
        planStandardFeature5: "Reportes financieros semanales",
        planStandardButton: "Comenzar",
        planPremiumName: "Premium",
        planPremiumPrice: "S/.399.90/mes",
        planPremiumFeature1: "Todo lo del Estándar",
        planPremiumFeature2: "Hasta 450 habitaciones",
        planPremiumFeature3: "Dashboard avanzado con estadísticas",
        planPremiumFeature4: "Analítica predictiva de ocupación y precios",
        planPremiumFeature5: "Notificaciones automáticas a clientes",
        planPremiumButton: "Contactar",

        // CTA
        ctaTitle: "¿Listo para comenzar?",
        ctaText: "Únete a cientos de propietarios de hostales que ya simplifican su gestión con nuestra plataforma.",
        ctaButton: "Iniciar prueba gratuita",

        // Footer
        FAQ: "Preguntas Frecuentes",
        privacyPolicy: "Política de Privacidad",
        termsOfService: "Términos de Servicio",
        copy: "© 2025 Hostel Manager. Todos los derechos reservados."
    }
};

/**
 * Function to switch the language of the page.
 * It updates the text content of elements based on the selected language.
 */
document.addEventListener("DOMContentLoaded", () => {
    const languageSwitcher = document.getElementById("languageSwitcher");

    languageSwitcher.addEventListener("change", (e) => {
        const lang = e.target.value;
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            el.textContent = translations[lang][key];
        });
    });
});