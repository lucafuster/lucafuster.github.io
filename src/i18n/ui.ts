export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'en';

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets', 
    'hero.role': 'Étudiant Ingénieur & Consultant Junior IT',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects', 
    'hero.role': 'Engineering Student & Junior IT Consultant',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}