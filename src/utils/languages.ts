export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const languages: Language[] = [
  { code: "en", name: "EN - English", flag: "/images/flags/en.svg" },
  { code: "es", name: "ES - Español", flag: "/images/flags/es.svg" },
  { code: "fr", name: "FR - French", flag: "/images/flags/fr.svg" },
];
