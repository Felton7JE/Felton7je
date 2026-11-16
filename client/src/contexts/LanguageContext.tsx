import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  cvLink: string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Nav
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contacto',
    'header.tagline': 'ENGENHARIA, INFRAESTRUTURA & CIBERSEGURANÇA',

    // Hero
    'hero.badge': 'ENGENHEIRO DE SOFTWARE & CIBERSEGURANÇA',
    'hero.title1': 'Sistemas que',
    'hero.title2': 'geram impacto.',
    'hero.subtitle': 'Engenharia de software, infraestrutura de TI, redes Cisco e cibersegurança defensiva.',
    'hero.btnProjects': 'Ver projetos',
    'hero.btnAbout': 'Sobre mim',
    'hero.btnCv': 'Baixar CV',
    'hero.stats.expYears': '3+',
    'hero.stats.exp': 'anos\nde experiência',
    'hero.stats.projectsCount': '50+',
    'hero.stats.projects': 'projetos\nrealizados',
    'hero.stats.clientsCount': '30+',
    'hero.stats.clients': 'clientes\natendidos',
    'hero.scroll': 'DESÇA PARA EXPLORAR',
    'hero.tagline1': 'ARQUITETURA SEGURA',
    'hero.tagline2': 'DESEMPENHO REAL',
    'hero.pillar1': 'SOFTWARE',
    'hero.pillar2': 'INFRAESTRUTURA',
    'hero.pillar3': 'CIBERSEGURANÇA',
    'hero.pillar4': 'REDES & CLOUD',

    // Contact
    'contact.badge': 'CONTACTO',
    'contact.title': 'Vamos criar algo extraordinário juntos?',
    'contact.subtitle': 'Estou disponível para engenharia de software full-stack, gestão de infraestrutura de TI, segurança de redes e consultoria técnica corporativa.',
    'contact.btn': 'FALAR COMIGO AGORA',
    'contact.location': 'Moçambique • Disponível Remotamente',
    'footer.rights': 'Todos os direitos reservados.',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'header.tagline': 'SOFTWARE ENGINEERING, IT INFRASTRUCTURE & CYBERSECURITY',

    // Hero
    'hero.badge': 'SOFTWARE ENGINEER & CYBERSECURITY',
    'hero.title1': 'Systems that',
    'hero.title2': 'drive real impact.',
    'hero.subtitle': 'Software engineering, corporate IT infrastructure, Cisco networking, and defensive cybersecurity.',
    'hero.btnProjects': 'View projects',
    'hero.btnAbout': 'About me',
    'hero.btnCv': 'Download CV',
    'hero.stats.expYears': '3+',
    'hero.stats.exp': 'years of\nexperience',
    'hero.stats.projectsCount': '50+',
    'hero.stats.projects': 'completed\nprojects',
    'hero.stats.clientsCount': '30+',
    'hero.stats.clients': 'clients\nserved',
    'hero.scroll': 'SCROLL TO EXPLORE',
    'hero.tagline1': 'SECURE ARCHITECTURE',
    'hero.tagline2': 'PROVEN PERFORMANCE',
    'hero.pillar1': 'SOFTWARE',
    'hero.pillar2': 'INFRASTRUCTURE',
    'hero.pillar3': 'CYBERSECURITY',
    'hero.pillar4': 'NETWORKS & CLOUD',

    // Contact
    'contact.badge': 'CONTACT',
    'contact.title': "Let's build something extraordinary together?",
    'contact.subtitle': 'Available for full-stack software engineering, corporate IT infrastructure management, network security, and enterprise technical consulting.',
    'contact.btn': 'GET IN TOUCH NOW',
    'contact.location': 'Mozambique • Available Globally (Remote)',
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('site_language');
      if (saved === 'pt' || saved === 'en') return saved;
    }
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem('site_language', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const cvLink =
    language === 'pt'
      ? '/cv/FELTON_ESTEVAO_CV_PORTUGUES.pdf'
      : '/cv/FELTON_ESTEVAO_CV_INGLES.pdf';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, cvLink }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

