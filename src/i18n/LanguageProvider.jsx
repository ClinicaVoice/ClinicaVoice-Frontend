import React, { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext(null);

const translations = {
  en: {
    appName: 'ClinicaVoice',
    role_admin: 'Admin',
    role_doctor: 'Doctor',
    role_patient: 'Patient',
    language_english: 'English',
    language_french: 'French',

    nav_dashboard: 'Dashboard',
    nav_doctors: 'Doctors',
    nav_patients: 'Patients',
    nav_transcriptions: 'Transcriptions',
    nav_settings: 'Settings',
    nav_auditLogs: 'Audit Logs',
    nav_myPatients: 'My Patients',
    nav_uploadAudio: 'Upload Audio',
    nav_reports: 'Reports',
    nav_profile: 'Profile',
    nav_account: 'Account Settings',

    card_totalDoctors: 'Total Doctors',
    card_totalPatients: 'Total Patients',
    card_totalTranscriptions: 'Total Transcriptions',
    card_pendingReviews: 'Pending Reviews',
    card_myPatients: 'My Patients',
    card_completedReports: 'Completed Reports',
    card_recentUploads: 'Recent Uploads',
    card_recentTranscriptions: 'Recent Transcriptions',

    admin_dashboard_title: 'Admin Dashboard',
    admin_recentTranscriptions: 'Recent Transcriptions',
    admin_column_patient: 'Patient',
    admin_column_doctor: 'Doctor',
    admin_column_date: 'Date',
    admin_column_status: 'Status',
    admin_column_actions: 'Actions',
    admin_viewReport: 'View report',
    admin_userManagement: 'User Management',
    admin_doctorTab: 'Doctors',
    admin_patientTab: 'Patients',
    admin_addDoctor: 'Add Doctor',
    admin_addPatient: 'Add Patient',
    admin_doctorName: 'Doctor name',
    admin_doctorEmail: 'Doctor email',
    admin_department: 'Department',
    admin_patientName: 'Patient name',
    admin_patientEmail: 'Patient email',
    admin_medicalId: 'Medical ID',
    admin_assignDoctor: 'Assign doctor',
    admin_cancel: 'Cancel',
    admin_save: 'Save',

    doctor_dashboard_title: 'Doctor Dashboard',
    doctor_patientList: 'Patient List',
    doctor_uploadTitle: 'Upload Medical Dictation',
    doctor_uploadSubtitle: 'Upload an audio file to transcribe and analyse.',
    doctor_chooseFile: 'Choose file',
    doctor_noFileSelected: 'No file selected',
    doctor_upload: 'Upload',
    doctor_recentReports: 'Recent Reports',
    doctor_column_lastVisit: 'Last Visit',
    doctor_column_reports: 'Reports',
    doctor_column_patientProfile: 'Patient profile',
    doctor_column_summary: 'Summary',
    doctor_viewPatient: 'View patient',
    doctor_viewFullReport: 'View full report',

    patient_dashboard_title: 'Patient Portal',
    patient_welcome: 'Welcome',
    patient_myReports: 'My Reports',
    patient_myProfile: 'My Profile',
    patient_primaryDoctor: 'Primary doctor',
    patient_medicalId: 'Medical ID',
    patient_column_reportDate: 'Report date',
    patient_column_doctor: 'Doctor',
    patient_column_overview: 'Overview',
    patient_downloadPDF: 'Download PDF',

    status_completed: 'Completed',
    status_pending: 'Pending',
    status_reviewed: 'Reviewed',

    login_title: 'Sign in to ClinicaVoice',
    login_email: 'Email',
    login_password: 'Password',
    login_role: 'Sign in as',
    login_button: 'Sign in',
    login_admin: 'Admin',
    login_doctor: 'Doctor',
    login_patient: 'Patient'
  },

  fr: {
    appName: 'ClinicaVoice',
    role_admin: 'Admin',
    role_doctor: 'Médecin',
    role_patient: 'Patient',
    language_english: 'Anglais',
    language_french: 'Français',

    nav_dashboard: 'Tableau de bord',
    nav_doctors: 'Médecins',
    nav_patients: 'Patients',
    nav_transcriptions: 'Transcriptions',
    nav_settings: 'Paramètres',
    nav_auditLogs: 'Journaux d’audit',
    nav_myPatients: 'Mes patients',
    nav_uploadAudio: 'Téléverser un audio',
    nav_reports: 'Rapports',
    nav_profile: 'Profil',
    nav_account: 'Paramètres du compte',

    card_totalDoctors: 'Nombre de médecins',
    card_totalPatients: 'Nombre de patients',
    card_totalTranscriptions: 'Nombre de transcriptions',
    card_pendingReviews: 'Analyses en attente',
    card_myPatients: 'Mes patients',
    card_completedReports: 'Rapports complétés',
    card_recentUploads: 'Téléversements récents',
    card_recentTranscriptions: 'Transcriptions récentes',

    admin_dashboard_title: 'Tableau de bord administrateur',
    admin_recentTranscriptions: 'Transcriptions récentes',
    admin_column_patient: 'Patient',
    admin_column_doctor: 'Médecin',
    admin_column_date: 'Date',
    admin_column_status: 'Statut',
    admin_column_actions: 'Actions',
    admin_viewReport: 'Voir le rapport',
    admin_userManagement: 'Gestion des utilisateurs',
    admin_doctorTab: 'Médecins',
    admin_patientTab: 'Patients',
    admin_addDoctor: 'Ajouter un médecin',
    admin_addPatient: 'Ajouter un patient',
    admin_doctorName: 'Nom du médecin',
    admin_doctorEmail: 'Courriel du médecin',
    admin_department: 'Service',
    admin_patientName: 'Nom du patient',
    admin_patientEmail: 'Courriel du patient',
    admin_medicalId: 'Identifiant médical',
    admin_assignDoctor: 'Assigner un médecin',
    admin_cancel: 'Annuler',
    admin_save: 'Enregistrer',

    doctor_dashboard_title: 'Tableau de bord médecin',
    doctor_patientList: 'Liste des patients',
    doctor_uploadTitle: 'Téléverser une dictée médicale',
    doctor_uploadSubtitle: 'Téléversez un fichier audio pour la transcription et l’analyse.',
    doctor_chooseFile: 'Choisir un fichier',
    doctor_noFileSelected: 'Aucun fichier sélectionné',
    doctor_upload: 'Téléverser',
    doctor_recentReports: 'Rapports récents',
    doctor_column_lastVisit: 'Dernière visite',
    doctor_column_reports: 'Rapports',
    doctor_column_patientProfile: 'Profil du patient',
    doctor_column_summary: 'Résumé',
    doctor_viewPatient: 'Voir le patient',
    doctor_viewFullReport: 'Voir le rapport complet',

    patient_dashboard_title: 'Portail patient',
    patient_welcome: 'Bienvenue',
    patient_myReports: 'Mes rapports',
    patient_myProfile: 'Mon profil',
    patient_primaryDoctor: 'Médecin traitant',
    patient_medicalId: 'Identifiant médical',
    patient_column_reportDate: 'Date du rapport',
    patient_column_doctor: 'Médecin',
    patient_column_overview: 'Aperçu',
    patient_downloadPDF: 'Télécharger le PDF',

    status_completed: 'Complété',
    status_pending: 'En attente',
    status_reviewed: 'Révisé',

    login_title: 'Connexion à ClinicaVoice',
    login_email: 'Courriel',
    login_password: 'Mot de passe',
    login_role: 'Se connecter en tant que',
    login_button: 'Se connecter',
    login_admin: 'Admin',
    login_doctor: 'Médecin',
    login_patient: 'Patient'
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const t = useCallback(
    (key) => {
      const dict = translations[lang] || translations.en;
      return dict[key] || key;
    },
    [lang]
  );

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  return ctx;
}
