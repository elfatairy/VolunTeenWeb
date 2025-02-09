import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import { MutableRefObject, useRef } from "react";
import { motion, useScroll, useTransform } from 'motion/react';

function Navbar({ servicesRef }: { servicesRef: MutableRefObject<null | HTMLDivElement> }) {
    const { t } = useTranslation();

    const titleRef = useRef<null | HTMLDivElement>(null);
    const { scrollYProgress: enteringTitleProgress } = useScroll({ target: servicesRef, offset: ['1 1.4', '1 1.37'] });
    const titleColor = useTransform(enteringTitleProgress, [0, 1], ['#000', '#fff'])
    // const w = useTransform(enteringTitleProgress, [0, 1], ['0%', '100%'])
    // const c = useTransform(enteringTitleProgress, [0, 1], ['#000', '#fff'])

    return (
        <nav>
            {/* <div style={{ width: '100vw', position: 'fixed', height: 3, backgroundColor: "#000", 'zIndex': 100, top: 100, left:0 }}>
                <motion.div style={{ height: '100%', backgroundColor: "#0f0", width: w }} />
            </div>
            <motion.div style={{ position: 'fixed', top: 0,
                left: 400,
                height: 300,
                width: 5,
                backgroundColor: c
             }}/> */}
            <div className="nav-container">
                <div className='nav-left'>
                    <img src="logosimplified.png" />
                    <motion.h1 className='title' ref={titleRef} style={{ color: titleColor }}>VolunTeen</motion.h1>
                </div>
                <div className='nav-right'>
                    <button className='nav-btn'>{t("Download-app")}</button>
                    <LanguageToggle />
                </div>
            </div>
        </nav>
    )
}

export default Navbar