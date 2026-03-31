import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LOCALS } from "./constants";
import en from "./locales/en.json";
import uk from "./locales/uk.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            [LOCALS.EN]: { translation: en },
            [LOCALS.UK]: { translation: uk }
        },
        lng: "uk",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;