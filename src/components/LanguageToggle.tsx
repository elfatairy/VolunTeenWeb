import { useState } from "react"
import { Languages } from "lucide-react"
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
    const { i18n: { language, changeLanguage } } = useTranslation();
    const [currentLanguage, setLanguage] = useState<"en" | "ar">(language as 'en' | 'ar');

    const toggleLanguage = () => {
        setLanguage((prevLang) => {
            const newLang = prevLang === "en" ? "ar" : "en";
            changeLanguage(newLang);
            return newLang;
        })
    }

    return (
        <button onClick={toggleLanguage} className="language-toggle">
            <Languages className="language-icon" />
            <span>{currentLanguage === "en" ? "English" : "العربية"}</span>
        </button>
    )
}

