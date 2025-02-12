
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
      description3: string;
      keyApplications: string;
      applications: string[];
    };
    services: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    contact: {
      title: string;
      name: string;
      email: string;
      message: string;
      send: string;
    };
    footer: {
      rights: string;
      disclaimer: string;
      social: {
        facebook: string;
        instagram: string;
      };
      company: {
        title: string;
        about: string;
        careers: string;
        privacy: string;
      };
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
      description2: "At EBH Hydraulics, we specialize in designing and implementing cutting-edge hydraulic systems that power modern machinery and equipment across various industries. Our expertise spans decades of innovation in fluid power technology.",
      description3: "From precision control systems to high-performance power units, we provide comprehensive solutions that drive efficiency and reliability in industrial applications.",
      keyApplications: "Key Applications",
      applications: [
        "Construction Equipment",
        "Manufacturing Systems",
        "Agricultural Machinery",
        "Marine Applications",
        "Mining Operations",
        "Aerospace Systems",
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
    footer: {
      rights: "© 2024 EBH Hydraulics. All rights reserved.",
      disclaimer: "The information provided on this website is for general informational purposes only.",
      social: {
        facebook: "Follow us on Facebook",
        instagram: "Follow us on Instagram",
      },
      company: {
        title: "Company Info",
        about: "About Us",
        careers: "Careers",
        privacy: "Privacy Policy",
      },
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
      description3: "De la conception de systèmes de contrôle précis aux unités de puissance de haute performance, nous fournissons des solutions complètes qui stimulent l'efficacité et la fiabilité dans les applications industrielles.",
      keyApplications: "Applications Principales",
      applications: [
        "Équipement de Construction",
        "Systèmes de Fabrication",
        "Machines Agricoles",
        "Applications Marines",
        "Opérations de Minage",
        "Systèmes Aéronautiques",
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
    footer: {
      rights: "© 2024 EBH Hydraulique. Tous droits réservés.",
      disclaimer: "Les informations fournies sur ce site sont à titre informatif uniquement.",
      social: {
        facebook: "Suivez-nous sur Facebook",
        instagram: "Suivez-nous sur Instagram",
      },
      company: {
        title: "Information de l'entreprise",
        about: "À propos",
        careers: "Carrières",
        privacy: "Politique de confidentialité",
      },
    },
  },
};

type TranslationValue<T> = T extends (infer U)[] ? U[] : T extends object ? T : string;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <K extends keyof Translations['en'], P extends keyof Translations['en'][K]>(
    section: K,
    key: P
  ) => TranslationValue<Translations['en'][K][P]>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = <K extends keyof Translations['en'], P extends keyof Translations['en'][K]>(
    section: K,
    key: P
  ): TranslationValue<Translations['en'][K][P]> => {
    return translations[language][section][key] as TranslationValue<Translations['en'][K][P]>;
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
