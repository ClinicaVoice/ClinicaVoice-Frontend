import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navigation
      nav_home: "Home",
      nav_about: "About",
      nav_contact: "Contact",
      nav_dashboard: "Dashboard",
      nav_signin: "Sign In",
      nav_getstarted: "Get Started",
      nav_logout: "Log Out",

      // Sidebar
      sidebar_overview: "Overview",
      sidebar_patients: "Patients",
      sidebar_transcriptions: "Transcriptions",
      sidebar_reports: "Reports",
      sidebar_settings: "Settings",

     //DashboardCard
      dashboard_activePatients: "Active Patients",
      dashboard_recentTranscriptions: "Recent Transcriptions",
      dashboard_pendingReviews: "Pending Reviews",

      // Hero Section
      hero_title: "ClinicaVoice",
      hero_tagline: "Dictate. Transcribe. Care.",
      hero_description:
        "AI-powered clinical transcription built for Canadian healthcare professionals. Focus on patient care — let ClinicaVoice handle your notes, summaries, and documentation.",
      hero_cta1: "Get Started",
      hero_cta2: "Learn More",

      // Why Section
      why_title: "Why ClinicaVoice?",
      why_sub:
        "We designed ClinicaVoice to make clinical documentation faster, safer, and more human-centered.",
      why_1_title: "🗣️ Real-Time Voice Capture",
      why_1_text:
        "Dictate patient notes hands-free. Our AI transcribes with medical-grade accuracy and privacy.",
      why_2_title: "🧩 Smart Templates",
      why_2_text:
        "Create and reuse SOAP, HPI, and EMR-ready templates — tailored to your workflow.",
      why_3_title: "🔐 Security & Compliance",
      why_3_text:
        "Built to meet Canadian privacy standards with encrypted storage and role-based access.",

      // How Section
      how_title: "How It Works",
      how_sub:
        "Simple, efficient, and built for clinicians — your voice becomes structured data in seconds.",
      how_1_title: "1️⃣ Record",
      how_1_text:
        "Use your browser or mobile device to securely capture patient dictations.",
      how_2_title: "2️⃣ Transcribe",
      how_2_text:
        "Our AI engine converts your recordings into accurate, structured notes.",
      how_3_title: "3️⃣ Export",
      how_3_text:
        "Instantly export notes to EMR systems, PDFs, or share securely with your team.",

      // Trusted Section
      trusted_title: "Trusted by Clinics Across Canada 🇨🇦",

      // About Page
        about_title: "About ClinicaVoice",
        about_description:
        "ClinicaVoice is built by clinicians and engineers to streamline clinical documentation. Our mission is to reduce administrative burden and improve patient care.",
        about_team: "Our Team",
        about_faculty: "Faculty Advisor",
        role_pm: "Project Manager / Liaison",
        role_frontend: "Frontend Developer",
        role_ai: "AI Specialist",
        role_backend: "Backend Developer",
        role_devops: "DevOps Engineer",
        role_qa: "QA & Documentation",
        role_faculty: "Faculty Advisor",

        features_title: "Product Features",
        features_description: "Explore ClinicaVoice modules and capabilities.",
        features_voice: "Voice Capture",
        features_voice_text: "High-accuracy models, speaker diarization, offline mode.",
        features_template: "Template Builder",
        features_template_text: "Customize templates, quick insert fields, and export options.",
        features_analytics: "Analytics",
        features_analytics_text: "Usage dashboards, transcription accuracy metrics, and exportable reports.",

        // Contact Page
        contact_title: "Contact & Support",
        contact_name: "Name",
        contact_email: "Email",
        contact_message: "Message",
        contact_send: "Send Message",
        contact_success: "Thanks — your message has been received!",
         
        // Dashboard Page
        dashboard_title: "Dashboard Overview",
        dashboard_patients: "Active Patients",
        dashboard_transcriptions: "Recent Transcriptions",
        dashboard_reviews: "Pending Reviews",
        dashboard_activity: "Activity (Last 30 Days)",
        dashboard_actions: "Quick Actions",
        dashboard_notes: "Recent Notes",
        dashboard_new: "New Transcription",
        dashboard_upload: "Upload Audio",
        dashboard_export: "Export Report",
        dashboard_note1: "John Doe — 2025-09-30 — Transcribed (reviewed)",
        dashboard_note2: "Jane Roe — 2025-09-29 — Transcribed",
        dashboard_note3: "Samuel K — 2025-09-28 — Pending review",

        //login page
        signin_title: "Welcome Back",
        signin_email: "Email Address",
        signin_password: "Password",
        signin_button: "Sign In",
        signin_error: "Invalid credentials. Please try again.",
        signin_noaccount: "Don't have an account?",
        signin_signup: "Create one",

        register_title: "Create an Account",
        register_name: "Full Name",
        register_email: "Email Address",
        register_password: "Password",
        register_button: "Sign Up",
        register_success: "Account created successfully! Redirecting...",
        register_haveaccount: "Already have an account?",
        register_signin: "Sign In"
       

    },
  },
  fr: {
    translation: {
      // Navigation
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_contact: "Contact",
      nav_dashboard: "Tableau de bord",
      nav_signin: "Connexion",
      nav_getstarted: "Commencer",
      nav_logout: "Déconnexion",

      // Sidebar
      sidebar_overview: "Aperçu",
      sidebar_patients: "Patients",
      sidebar_transcriptions: "Transcriptions",
      sidebar_reports: "Rapports",
      sidebar_settings: "Paramètres",

      //DashboardCard
      dashboard_patients: "Patients actifs",
      dashboard_transcriptions: "Transcriptions récentes",
      dashboard_reviews: "Révisions en attente",




      // Hero Section
      hero_title: "ClinicaVoice",
      hero_tagline: "Dictez. Transcrivez. Prenez soin.",
      hero_description:
        "Transcription clinique alimentée par l'IA pour les professionnels de la santé canadiens. Concentrez-vous sur les soins aux patients — laissez ClinicaVoice gérer vos notes et vos résumés.",
      hero_cta1: "Commencer",
      hero_cta2: "En savoir plus",

      // Why Section
      why_title: "Pourquoi ClinicaVoice?",
      why_sub:
        "Nous avons conçu ClinicaVoice pour rendre la documentation clinique plus rapide, plus sûre et plus humaine.",
      why_1_title: "🗣️ Capture vocale en temps réel",
      why_1_text:
        "Dictez les notes des patients sans les mains. Notre IA transcrit avec une précision et une confidentialité de niveau médical.",
      why_2_title: "🧩 Modèles intelligents",
      why_2_text:
        "Créez et réutilisez des modèles SOAP, HPI et compatibles DME — adaptés à votre flux de travail.",
      why_3_title: "🔐 Sécurité et conformité",
      why_3_text:
        "Conçu pour respecter les normes canadiennes de confidentialité avec stockage chiffré et accès basé sur les rôles.",

      // How Section
      how_title: "Comment ça fonctionne",
      how_sub:
        "Simple, efficace et conçu pour les cliniciens — votre voix devient des données structurées en quelques secondes.",
      how_1_title: "1️⃣ Enregistrer",
      how_1_text:
        "Utilisez votre navigateur ou appareil mobile pour capturer en toute sécurité les dictées des patients.",
      how_2_title: "2️⃣ Transcrire",
      how_2_text:
        "Notre moteur d'IA convertit vos enregistrements en notes précises et structurées.",
      how_3_title: "3️⃣ Exporter",
      how_3_text:
        "Exportez instantanément les notes vers les systèmes DME, en PDF, ou partagez-les en toute sécurité avec votre équipe.",

      // Trusted Section
      trusted_title: "Fiable pour les cliniques à travers le Canada 🇨🇦",

      // About Page
        about_title: "À propos de ClinicaVoice",
        about_description:
        "ClinicaVoice est conçu par des cliniciens et des ingénieurs pour simplifier la documentation clinique. Notre mission est de réduire la charge administrative et d'améliorer les soins aux patients.",
        about_team: "Notre équipe",
        about_faculty: "Conseiller pédagogique",
        role_pm: "Chef de projet / Liaison",
        role_frontend: "Développeuse Frontend",
        role_ai: "Spécialiste IA",
        role_backend: "Développeur Backend",
        role_devops: "Ingénieur DevOps",
        role_qa: "Assurance qualité et documentation",
        role_faculty: "Conseiller pédagogique",

        features_title: "Fonctionnalités du produit",
        features_description: "Découvrez les modules et capacités de ClinicaVoice.",
        features_voice: "Capture vocale",
        features_voice_text: "Modèles de haute précision, séparation des locuteurs, mode hors ligne.",
        features_template: "Générateur de modèles",
        features_template_text: "Personnalisez vos modèles, champs rapides et options d'exportation.",
        features_analytics: "Analytique",
        features_analytics_text: "Tableaux de bord d'utilisation, précision des transcriptions et rapports exportables.",

        
        // Contact Page
        contact_title: "Contact et assistance",
        contact_name: "Nom",
        contact_email: "Courriel",
        contact_message: "Message",
        contact_send: "Envoyer le message",
        contact_success: "Merci — votre message a été reçu !",

        // Dashboard Page
        dashboard_title: "Vue d'ensemble du tableau de bord",
        dashboard_patients: "Patients actifs",
        dashboard_transcriptions: "Transcriptions récentes",
        dashboard_reviews: "En attente de révision",
        dashboard_activity: "Activité (30 derniers jours)",
        dashboard_notes: "Notes récentes",
        dashboard_actions: "Actions rapides",
        dashboard_new: "Nouvelle transcription",
        dashboard_upload: "Téléverser un audio",
        dashboard_export: "Exporter le rapport",
        dashboard_note1: "John Doe — 2025-09-30 — Transcrit (vérifié)",
        dashboard_note2: "Jane Roe — 2025-09-29 — Transcrit",
        dashboard_note3: "Samuel K — 2025-09-28 — En attente de vérification",

        //login page
        signin_title: "Bienvenue à nouveau",
        signin_email: "Adresse e-mail",
        signin_password: "Mot de passe",
        signin_button: "Se connecter",
        signin_error: "Identifiants invalides. Veuillez réessayer.",
        signin_noaccount: "Vous n'avez pas de compte ?",
        signin_signup: "Créer un compte",

        register_title: "Créer un compte",
        register_name: "Nom complet",
        register_email: "Adresse e-mail",
        register_password: "Mot de passe",
        register_button: "S'inscrire",
        register_success: "Compte créé avec succès ! Redirection...",
        register_haveaccount: "Vous avez déjà un compte ?",
        register_signin: "Se connecter"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
