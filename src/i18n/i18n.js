import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { LOCALS } from "./constants";
import en from "./locales/en.json";
import uk from "./locales/uk.json";


i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            [LOCALS.EN]: { translation: en },
            [LOCALS.UK]: { translation: uk }
        },
        fallbackLng: "en",
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            checkWhitelist: true
        },
        whitelist: ["en", "uk"],
        interpolation: {
            escapeValue: false
        }
    })


const lang = localStorage.getItem("i18nextLng");

if (lang && !["en", "uk"].includes(lang)) {
    localStorage.setItem("i18nextLng", "en");
    i18n.changeLanguage(LOCALS.EN);
}

export default i18n;