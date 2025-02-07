import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

function Navbar() {
    const { t } = useTranslation();

    return (
        <nav>
            <div className='nav-left'>
                <img src="logosimplified.png" />
                <h1 className='title'>VolunTeen</h1>
            </div>
            <div className='nav-right'>
                <button className='nav-btn'>{t("Download-app")}</button>
                <LanguageToggle />
            </div>
        </nav>
    )
}

export default Navbar