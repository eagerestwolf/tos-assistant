import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enGB from "./en/gb.json";
import enUS from "./en/us.json";

export const resources = {
  "en-GB": enGB,
  "en-US": enUS
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    resources
  });
