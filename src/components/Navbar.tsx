import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import { MutableRefObject, useRef } from "react";
import { motion, useScroll, useTransform } from 'motion/react';

function Navbar({servicesRef}: {servicesRef: MutableRefObject<null | HTMLDivElement>}) {
    const { t } = useTranslation();

    const titleRef = useRef<null | HTMLDivElement>(null);
    const { scrollYProgress: enteringTitleProgress } = useScroll({ target: servicesRef, offset: ['0 290px', '0 270px'] });
    const titleColor = useTransform(enteringTitleProgress, [0, 1], ['#000', '#fff'])

    return (
        <nav>
            <div className='nav-left'>
                <img src="logosimplified.png" />
                <motion.h1 className='title' ref={titleRef} style={{color: titleColor}}>VolunTeen</motion.h1>
            </div>
            <div className='nav-right'>
                <button className='nav-btn'>{t("Download-app")}</button>
                <LanguageToggle />
            </div>
        </nav>
    )
}

export default Navbar