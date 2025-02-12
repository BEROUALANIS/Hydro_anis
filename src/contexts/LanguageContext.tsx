
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

type Translations = {
  [key in Language]: {
    navigation: {
      home: string;
      about: string;
      services: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    about: {
      title: string;
      description1: string;
      description2: string;
      keyApplications: string;
      applications: string[];
    };
    services: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    contact: {
      title: string;
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
};

const translations: Translations = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "EBH Hydraulics",
      subtitle: "Innovative hydraulic solutions for modern engineering challenges",
      cta: "Get in Touch",
    },
    about: {
      title: "About Hydraulics",
      description1: "Hydraulics is the science of fluid mechanics that deals with the mechanical properties of fluids, particularly the flow of water in pipes, rivers, and channels.",
      description2: "At EBH Hydraulics, we specialize in designing and implementing cutting-edge hydraulic systems that power modern machinery and equipment across various industries.",
      keyApplications: "Key Applications",
      applications: [
        "Construction Equipment",
        "Manufacturing Systems",
        "Agricultural Machinery",
        "Marine Applications",
      ],
    },
    services: {
      title: "Our Services",
      items: [
        {
          title: "System Design",
          description: "Custom hydraulic system design tailored to your specific needs",
        },
        {
          title: "Maintenance",
          description: "Regular maintenance and repair services for hydraulic systems",
        },
        {
          title: "Consultation",
          description: "Expert consultation for optimizing hydraulic system performance",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
  },
  fr: {
    navigation: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "EBH Hydraulique",
      subtitle: "Solutions hydrauliques innovantes pour les défis d'ingénierie modernes",
      cta: "Contactez-nous",
    },
    about: {
      title: "À propos de l'hydraulique",
      description1: "L'hydraulique est la science de la mécanique des fluides qui traite des propriétés mécaniques des fluides, en particulier l'écoulement de l'eau dans les tuyaux, les rivières et les canaux.",
      description2: "Chez EBH Hydraulique, nous nous spécialisons dans la conception et la mise en œuvre de systèmes hydrauliques de pointe qui alimentent les machines et équipements modernes dans diverses industries.",
      keyApplications: "Applications Principales",
      applications: [
        "Équipement de Construction",
        "Systèmes de Fabrication",
        "Machines Agricoles",
        "Applications Marines",
      ],
    },
    services: {
      title: "Nos Services",
      items: [
        {
          title: "Conception de Systèmes",
          description: "Conception de systèmes hydrauliques personnalisés selon vos besoins spécifiques",
        },
        {
          title: "Maintenance",
          description: "Services réguliers de maintenance et de réparation des systèmes hydrauliques",
        },
        {
          title: "Consultation",
          description: "Consultation expert pour optimiser la performance des systèmes hydrauliques",
        },
      ],
    },
    contact: {
      title: "Contactez-nous",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer le Message",
    },
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: keyof Translations['en'], key: string, subKey?: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (section: keyof Translations['en'], key: string, subKey?: string) => {
    const translation = translations[language][section] as any;
    if (subKey) {
      return translation[key][subKey] || key;
    }
    return translation[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
