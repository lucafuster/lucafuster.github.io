// src/i18n/ui.ts

export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'hero.role': 'Développeur & Créatif',
    'hero.desc': 'Je conçois des solutions minimalistes et performantes.',
    'about.title': 'À propos de moi',
    'about.experience': 'Expériences',
    'about.education': 'Parcours',
    'btn.cv': 'Télécharger mon CV',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'hero.role': 'Developer & Creative',
    'hero.desc': 'Building minimalist and performant solutions.',
    'about.title': 'About Me',
    'about.experience': 'Experience',
    'about.education': 'Education',
    'btn.cv': 'Download Resume',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
