import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationEn  from "./English.json"
import TranslationAr  from "./Arabic.json"
import languageDectector from "i18next-browser-languagedetector"

const resources ={
    en : {
        translation : TranslationEn
    },
    ar:{
        translation : TranslationAr
    }
}

i18n 
    .use(languageDectector)
    .use(initReactI18next)
    .init({
        resources , 
        lng : 'en',
        interpolation : {
            escapeValue : false
        },
        react : {
            useSuspense : false
        }
    })

export default i18n    