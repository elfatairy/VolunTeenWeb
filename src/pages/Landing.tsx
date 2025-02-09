import React, { MutableRefObject, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar'
import { motion, useInView, useScroll, useSpring, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';

function Hero() {
    const { t } = useTranslation();

    return <div className='hero'>
        <h2 className='hero-title'>{t("Empowering-Teens-to-Earn-Through-Volunteering.")}</h2>
        <p className='hero-desc'>{t("A-Platform-for-Giving-Back.")}</p>
        <div className='download-btns'>
            <button className='download-btn'>
                <svg width="25px" height="25px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_87_8320" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="7" y="3" width="24" height="26"><path d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z" fill="#C4C4C4" /></mask><g mask="url(#mask0_87_8320)"><path d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z" fill="url(#paint0_linear_87_8320)" /><path d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z" fill="url(#paint1_linear_87_8320)" /><path d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z" fill="url(#paint2_linear_87_8320)" /><path d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z" fill="url(#paint3_linear_87_8320)" /></g><defs><linearGradient id="paint0_linear_87_8320" x1="15.6769" y1="10.874" x2="7.07106" y2="19.5506" gradientUnits="userSpaceOnUse"><stop stopColor="#00C3FF" /><stop offset="1" stopColor="#1BE2FA" /></linearGradient><linearGradient id="paint1_linear_87_8320" x1="20.292" y1="15.8176" x2="31.7381" y2="15.8176" gradientUnits="userSpaceOnUse"><stop stopColor="#FFCE00" /><stop offset="1" stopColor="#FFEA00" /></linearGradient><linearGradient id="paint2_linear_87_8320" x1="7.36932" y1="30.1004" x2="22.595" y2="17.8937" gradientUnits="userSpaceOnUse"><stop stopColor="#DE2453" /><stop offset="1" stopColor="#FE3944" /></linearGradient><linearGradient id="paint3_linear_87_8320" x1="8.10725" y1="1.90137" x2="22.5971" y2="13.7365" gradientUnits="userSpaceOnUse"><stop stopColor="#11D574" /><stop offset="1" stopColor="#01F176" /></linearGradient></defs></svg>

                <div className='btn-txt'>
                    <span className='btn-txt-1'>{t("Get-it-on")}</span>
                    <span className='btn-txt-2'>{t("Google-Play")}</span>
                </div>
            </button>
        </div>
    </div>;
}

function About() {
    const { t } = useTranslation();

    return <div className='about'>
        <div className='left'><h2>{t("How-VolunTeen-can-help-you?")}</h2></div>
        <div>
            <img src='phones.png' />
        </div>
        <ul>
            <li>
                <svg fill="#fff" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M30.822 14.245l-0.023-0.974c-0.016-1.579-0.082-2.873-0.207-4.074-0.059-0.623-0.147-1.18-0.267-1.725l0.017 0.093c-0.071-0.439-0.238-0.83-0.478-1.164l0.006 0.008c-0.091-0.112-0.211-0.197-0.35-0.242l-0.005-0.001c-0.304-0.126-0.657-0.199-1.026-0.199-0.531 0-1.026 0.151-1.446 0.412l0.012-0.007c-0.698 0.541-1.166 1.35-1.251 2.269l-0.001 0.013-0.509 5.008c-0.292-0.155-0.639-0.246-1.007-0.246-0.861 0-1.605 0.498-1.961 1.222l-0.006 0.013-1.555 2.693-2.953 2.819c-0.051 0.048-0.095 0.104-0.13 0.165l-0.002 0.003-0.832 1.44-0.43-0.248c-0.016-0.009-0.035-0.009-0.052-0.017-0.092-0.045-0.201-0.072-0.316-0.072s-0.223 0.026-0.32 0.074l0.004-0.002c-0.017 0.008-0.036 0.008-0.053 0.017l-0.43 0.248-0.831-1.44c-0.037-0.064-0.081-0.12-0.131-0.168l-0-0-2.953-2.819-1.555-2.693c-0.304-0.565-0.813-0.986-1.425-1.168l-0.017-0.004c-0.16-0.044-0.344-0.069-0.534-0.069-0.366 0-0.71 0.094-1.009 0.259l0.011-0.005-0.508-4.997c-0.083-0.937-0.552-1.75-1.246-2.288l-0.007-0.005c-0.408-0.254-0.904-0.405-1.435-0.405-0.37 0-0.722 0.073-1.044 0.206l0.018-0.007c-0.144 0.046-0.265 0.131-0.354 0.242l-0.001 0.001c-0.24 0.337-0.41 0.74-0.479 1.176l-0.002 0.016c-0.101 0.445-0.186 0.99-0.237 1.545l-0.004 0.053c-0.124 1.197-0.189 2.491-0.207 4.072-0.004 0.328-0.014 0.656-0.023 0.984-0.019 0.314-0.030 0.682-0.030 1.052 0 0.701 0.039 1.392 0.116 2.072l-0.008-0.083c0.358 2.481 1.583 4.625 3.354 6.156l0.013 0.011c1.048 0.83 1.971 1.736 2.791 2.73l0.025 0.031-0.597 0.345c-0.226 0.132-0.375 0.374-0.375 0.65 0 0.138 0.037 0.268 0.102 0.379l-0.002-0.004 1.605 2.781c0.099 0.17 0.259 0.296 0.45 0.348l0.005 0.001c0.057 0.016 0.123 0.025 0.191 0.025 0.001 0 0.002 0 0.004 0h-0c0.001 0 0.001 0 0.002 0 0.137 0 0.266-0.037 0.377-0.102l-0.004 0.002 6.753-3.9 6.757 3.9c0.108 0.062 0.237 0.099 0.375 0.1h0c0.276-0.001 0.518-0.15 0.648-0.371l0.002-0.004 1.605-2.781c0.062-0.108 0.099-0.237 0.099-0.375 0-0.069-0.009-0.135-0.026-0.198l0.001 0.005c-0.053-0.196-0.179-0.357-0.346-0.455l-0.004-0.002-0.598-0.345c0.853-1.032 1.784-1.944 2.802-2.751l0.038-0.029c1.77-1.54 2.987-3.677 3.337-6.094l0.006-0.054c0.068-0.595 0.107-1.285 0.107-1.983 0-0.376-0.011-0.748-0.033-1.118l0.002 0.051zM5.674 22.307c-1.493-1.312-2.521-3.121-2.827-5.166l-0.006-0.047c-0.061-0.537-0.095-1.159-0.095-1.789 0-0.353 0.011-0.704 0.032-1.051l-0.002 0.048c0.011-0.338 0.021-0.676 0.024-1.014 0.017-1.534 0.080-2.784 0.199-3.936 0.050-0.554 0.128-1.052 0.236-1.539l-0.015 0.080c0.026-0.116 0.058-0.258 0.097-0.373 0.1-0.031 0.214-0.049 0.333-0.049 0.206 0 0.4 0.054 0.567 0.149l-0.006-0.003c0.334 0.297 0.555 0.714 0.594 1.183l0 0.007 0.714 7.020c0.012 0.111 0.046 0.213 0.099 0.302l-0.002-0.004 3.218 5.573c0.131 0.231 0.375 0.385 0.655 0.385 0.414 0 0.75-0.336 0.75-0.75 0-0.142-0.040-0.275-0.108-0.388l0.002 0.003-2.815-4.876c-0.316-0.549-0.129-0.918 0.152-1.080 0.276-0.165 0.693-0.143 1.012 0.408l1.608 2.786c0.037 0.064 0.081 0.119 0.132 0.168l0 0 2.953 2.82 0.778 1.346-5.112 2.951c-0.938-1.187-1.979-2.227-3.128-3.134l-0.040-0.030zM22.904 28.975l-6.477-3.738c-0.011-0.006-0.024-0.006-0.035-0.011-0.066-0.035-0.143-0.061-0.225-0.074l-0.004-0.001-0.054-0.004c-0.018-0.002-0.039-0.002-0.061-0.002-0.058 0-0.115 0.007-0.17 0.020l0.005-0.001c-0.024 0.006-0.046 0.015-0.069 0.022-0.051 0.012-0.096 0.027-0.139 0.045l0.005-0.002-6.487 3.746-0.855-1.48 7.71-4.451 7.71 4.451zM29.258 17.095c-0.309 2.082-1.328 3.882-2.8 5.185l-0.009 0.008c-1.198 0.943-2.246 1.989-3.162 3.144l-0.030 0.039-5.111-2.95 0.778-1.346 2.953-2.82c0.051-0.048 0.095-0.104 0.131-0.165l0.002-0.003 1.609-2.786c0.11-0.221 0.298-0.39 0.527-0.473l0.007-0.002c0.047-0.012 0.1-0.019 0.156-0.019 0.118 0 0.229 0.032 0.324 0.087l-0.003-0.002c0.144 0.082 0.251 0.216 0.296 0.375l0.001 0.004c0.010 0.052 0.016 0.113 0.016 0.174 0 0.196-0.060 0.378-0.163 0.529l0.002-0.003-2.816 4.876c-0.063 0.108-0.1 0.237-0.1 0.375 0 0.277 0.149 0.518 0.372 0.649l0.004 0.002c0.107 0.060 0.234 0.096 0.37 0.096 0.277 0 0.519-0.147 0.653-0.368l0.002-0.003 3.219-5.573c0.051-0.086 0.085-0.187 0.095-0.296l0-0.003 0.713-7.027c0.042-0.473 0.263-0.887 0.594-1.18l0.002-0.002c0.163-0.091 0.357-0.144 0.563-0.144 0.117 0 0.231 0.017 0.338 0.049l-0.008-0.002c0.035 0.106 0.072 0.244 0.101 0.384l0.005 0.026c0.089 0.396 0.164 0.882 0.209 1.377l0.003 0.047c0.121 1.152 0.184 2.402 0.199 3.935 0.004 0.334 0.014 0.669 0.025 1.003 0.019 0.299 0.029 0.648 0.029 1 0 0.635-0.035 1.263-0.102 1.88l0.007-0.076zM15.354 14.643c0.138 0.153 0.336 0.248 0.557 0.248s0.419-0.095 0.556-0.247l0.001-0.001 4.984-5.523c0.958-0.811 1.561-2.014 1.561-3.358 0-1.18-0.466-2.252-1.223-3.041l0.001 0.002c-0.775-0.756-1.835-1.223-3.005-1.223-1.109 0-2.12 0.42-2.884 1.109l0.004-0.003c-0.719-0.587-1.646-0.943-2.657-0.943-0.042 0-0.083 0.001-0.124 0.002l0.006-0c-1.132 0.046-2.144 0.526-2.88 1.277l-0.001 0.001c-0.791 0.769-1.282 1.843-1.282 3.031 0 1.241 0.535 2.357 1.387 3.13l0.004 0.003zM11.311 4.001c0.494-0.51 1.181-0.831 1.943-0.845l0.003-0c0.843 0.027 1.595 0.399 2.122 0.979l0.002 0.002c0.136 0.136 0.323 0.22 0.53 0.22s0.395-0.084 0.53-0.22v0c0.533-0.7 1.366-1.147 2.304-1.147 0.77 0 1.47 0.301 1.987 0.793l-0.001-0.001c0.491 0.516 0.792 1.216 0.792 1.986 0 0.938-0.447 1.771-1.141 2.299l-0.007 0.005-0.025 0.028-4.439 4.92-4.465-4.948c-0.599-0.546-0.974-1.33-0.975-2.201v-0c0.034-0.736 0.349-1.392 0.839-1.87l0.001-0.001z"></path></svg>
                <span>{t("Affordable-Help-for-Everyday-Needs")}</span>
            </li>
            <li>
                <svg fill="#fff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 263.976 263.976" xmlSpace="preserve"><g><path d="M149.763,36.21c3.01-3.811,4.871-8.616,4.871-13.837C154.634,10.036,144.628,0,132.291,0s-22.358,10.036-22.358,22.373 c0,5.222,1.597,10.026,4.605,13.837c-9.211,5.839-15.55,16.117-15.55,27.807v27.22c0,4.143,3.785,7.739,7.928,7.739h50.811 c4.143,0,7.262-3.597,7.262-7.739v-27.22C164.988,52.327,158.976,42.048,149.763,36.21z" /><path d="M81.988,124.539v-27.22c0-11.689-5.754-21.969-14.967-27.807c3.01-3.811,5-8.616,5-13.837 c0-12.337-9.942-22.373-22.279-22.373S27.416,43.339,27.416,55.676c0,5.222,1.855,10.026,4.863,13.837 c-9.212,5.839-15.292,16.117-15.292,27.807v27.22c0,4.143,3.301,7.437,7.443,7.437h50.811 C79.384,131.976,81.988,128.682,81.988,124.539z" /><path d="M232.034,69.513c3.008-3.811,5.006-8.616,5.006-13.837c0-12.337-9.939-22.373-22.276-22.373 c-12.337,0-22.325,10.036-22.325,22.373c0,5.222,1.843,10.026,4.852,13.837c-9.212,5.839-15.304,16.117-15.304,27.807v27.22 c0,4.143,3.326,7.437,7.469,7.437h50.811c4.143,0,6.721-3.294,6.721-7.437v-27.22C246.988,85.63,241.245,75.351,232.034,69.513z" /><path d="M149.763,201.464c3.01-3.811,4.871-8.615,4.871-13.836c0-12.337-10.006-22.373-22.343-22.373s-22.358,10.036-22.358,22.373 c0,5.221,1.597,10.026,4.605,13.837c-9.211,5.839-15.55,16.117-15.55,27.807v27.22c0,4.143,3.785,7.484,7.928,7.484h50.811 c4.143,0,7.262-3.342,7.262-7.484v-27.22C164.988,217.581,158.976,207.304,149.763,201.464z M132.321,180.255 c4.065,0,7.373,3.308,7.373,7.373c0,4.066-3.308,7.373-7.373,7.373s-7.373-3.308-7.373-7.373 C124.948,183.563,128.255,180.255,132.321,180.255z M149.988,248.976h-36v-19.704c0-9.874,8.127-17.906,18.001-17.906 c9.872,0,17.999,8.032,17.999,17.906V248.976z" /><path d="M138.988,138.555v-24.854c0-4.143-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5v24.854c0,4.143,3.357,7.5,7.5,7.5 C135.63,146.055,138.988,142.697,138.988,138.555z" /><path d="M59.331,140.177c-3.009-2.847-7.753-2.718-10.604,0.289c-2.848,3.008-2.718,7.755,0.289,10.604l37.709,35.707 c1.451,1.373,3.305,2.054,5.156,2.054c1.987,0,3.972-0.786,5.447-2.343c2.848-3.008,2.718-7.755-0.289-10.604L59.331,140.177z" /><path d="M205.241,140.071l-37.606,35.789c-3.001,2.855-3.118,7.603-0.263,10.603c1.474,1.55,3.452,2.33,5.434,2.33 c1.857,0,3.718-0.686,5.169-2.067l37.606-35.789c3.001-2.855,3.118-7.602,0.263-10.602 C212.989,137.332,208.241,137.217,205.241,140.071z" /></g></svg>
                <span>{t("Community-Support-Made-Easy")}</span>
            </li>
            <li>
                <svg fill="#fff" width="20px" height="20px" viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="gift_box-box_-heart-love-valentine"><path d="M408,160h-64c15.55-0.021,28.483-12.719,28.504-28.269c0.021-15.55-12.568-28.139-28.118-28.118 c0.023-17.486-15.9-31.228-34.048-27.504C297.124,78.82,288,91.085,288,104.575v5.667c-4.256-3.838-9.831-6.242-16-6.242h-32   c-6.169,0-11.744,2.404-16,6.242v-5.667c0-13.491-9.124-25.755-22.339-28.467c-18.148-3.724-34.071,10.018-34.048,27.504   c-15.549-0.021-28.138,12.568-28.118,28.118C139.517,147.281,152.45,159.979,168,160h-64c-17.673,0-32,14.327-32,32v8   c0,17.673,14.327,32,32,32h96v16H96v161.28c0,16.966,13.754,30.72,30.72,30.72H200c8.837,0,16-7.163,16-16V168h80v256   c0,8.837,7.163,16,16,16h73.28c16.966,0,30.72-13.754,30.72-30.72V248H312v-16h96c17.673,0,32-14.327,32-32v-8   C440,174.327,425.673,160,408,160z M232,152v-24c0-4.41,3.586-8,8-8h32c4.414,0,8,3.59,8,8v24H232z" /></g><g id="Layer_1" /></svg>
                <span>{t("Donate-&-Support")}</span>
            </li>
        </ul>
    </div>;
}

function AnimatedTitle({ children, delay }: { children: React.ReactNode, delay: number }) {
    const titleRef = useRef(null)
    const isTitleInView = useInView(titleRef, { margin: "-5% 0px -10% 0px" });

    return <motion.span
        animate={{
            opacity: isTitleInView ? 1 : 0,
            bottom: isTitleInView ? 0 : -20,
        }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        ref={titleRef}
        viewport={{ amount: 1 }}
        style={{
            position: 'relative'
        }}
    >{children}</motion.span>
}

function Joining() {
    const imgRef = useRef(null)
    const isImgInView = useInView(imgRef, { margin: "-50% 0px -50% 0px" });
    const parallaxRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: parallaxRef });
    const ulRef = useRef<HTMLUListElement>(null);

    const { innerWidth: width } = window;

    const scrollX = useTransform(scrollYProgress, [.1, 0.9], [0, 1.8 * width + 100])
    const springedScrollX = useSpring(scrollX);
    const { t } = useTranslation();

    useEffect(() => {
        console.log(ulRef);

        if (!ulRef.current) return console.log("null")

        console.log(ulRef.current.offsetWidth);
    }, [ulRef.current])

    return <div className='joining'>
        <div className='joining-img' ref={imgRef}>
            <motion.img
                animate={{ scale: isImgInView ? 1 : 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ amount: 1 }}
                src='volunteer.png' />
        </div>
        <motion.div className='parallax-container' ref={parallaxRef}>
            <div className='parallax'>
                <h2>
                    <AnimatedTitle delay={0}>{t("Just-4-simple-steps-away")}</AnimatedTitle>
                    <AnimatedTitle delay={0.3}>{t("from-joining-VolunTeen")}</AnimatedTitle>
                </h2>
                <div className='scroller'>
                    <motion.ul style={{ right: springedScrollX, left: springedScrollX }} ref={ulRef}>
                        <li>
                            <div className='item'>
                                <div className='index'><span>01</span></div>
                                <span className='blob'>
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#d3691e" d="M37.1,-42.5C50.5,-41.3,65.4,-33.7,71.4,-21.7C77.4,-9.6,74.5,6.8,70.9,24.6C67.3,42.4,63,61.6,51,69.5C39.1,77.5,19.6,74.2,7.4,64C-4.7,53.8,-9.5,36.7,-19.9,28.2C-30.3,19.8,-46.3,20,-55.1,13.1C-63.9,6.2,-65.5,-7.8,-59.1,-16.7C-52.7,-25.5,-38.4,-29.3,-27.2,-31.2C-16,-33.1,-8,-33.2,1.9,-35.8C11.9,-38.5,23.7,-43.7,37.1,-42.5Z" transform="translate(100 100)" /></svg>
                                </span>
                                <div className='text'>
                                    <h3>{t("Create-your-profile")}</h3>
                                    <p>{t("Sign-up-and-create-your-profile.-Tell-us-a-bit-about-yourself-and-create-credentials-that-you-will-use-later-to-login.")}</p>
                                </div>
                                <img src='phone1.png' />
                            </div>
                        </li>
                        <li>
                            <div className='item'>
                                <div className='index'><span>02</span></div>
                                <span className='blob'>
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#3097d1" d="M20.1,-39.1C24.5,-24.5,25.4,-16.5,36.2,-6.3C46.9,3.9,67.6,16.3,71.9,29.7C76.3,43.1,64.3,57.6,49.6,67.9C34.9,78.2,17.5,84.2,2.8,80.3C-11.8,76.5,-23.7,62.6,-32,50.3C-40.4,38,-45.4,27.2,-49.4,15.8C-53.5,4.4,-56.6,-7.5,-54.8,-19.3C-53,-31.1,-46.2,-42.7,-36.3,-55.5C-26.3,-68.4,-13.2,-82.4,-2.6,-78.8C7.9,-75.1,15.7,-53.8,20.1,-39.1Z" transform="translate(100 100)" /></svg>
                                </span>
                                <div className='text'>
                                    <h3>{t("Choose-account-type")}</h3>
                                    <p>{t("Select-the-account-type-that-best-suits-you.-Whether-you’re-a-teenager-looking-for-flexible-volunteer-based-work-with-additional-income-or-a-customer-in-need-of-assistance-with-everyday-tasks-like-senior-care,-childcare,-pet-care,-or deliveries, our platform connects you with the right opportunities.")}</p>
                                </div>
                                <img src='phone2.png' />
                            </div>
                        </li>
                        <li>
                            <div className='item'>
                                <div className='index'><span>03</span></div>
                                <span className='blob'>
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#97db80" d="M37.1,-42.5C50.5,-41.3,65.4,-33.7,71.4,-21.7C77.4,-9.6,74.5,6.8,70.9,24.6C67.3,42.4,63,61.6,51,69.5C39.1,77.5,19.6,74.2,7.4,64C-4.7,53.8,-9.5,36.7,-19.9,28.2C-30.3,19.8,-46.3,20,-55.1,13.1C-63.9,6.2,-65.5,-7.8,-59.1,-16.7C-52.7,-25.5,-38.4,-29.3,-27.2,-31.2C-16,-33.1,-8,-33.2,1.9,-35.8C11.9,-38.5,23.7,-43.7,37.1,-42.5Z" transform="translate(100 100)" /></svg>
                                </span>
                                <div className='text'>
                                    <h3>{t("Do-Your-First-Action")}</h3>
                                    <p>{t("Start-making-a-difference!-Whether-you’re-offering-help-or-requesting-assistance,-take-your-first-step-on-the-platform.-Find-tasks-that-match-your-skills,-volunteer-to-support-others,-or-request-services-that-simplify-your-daily-life.-You-can-also-donate-unused-items-to-those-in-need-or-connect-with-specialists-in-various-fields-for-guidance.")}</p>
                                </div>
                                <img src='phone3.png' />
                            </div>
                        </li>
                    </motion.ul>
                </div>
            </div>
        </motion.div>
    </div>;
}

const Service = ({ scrollYProgress, start, end, bg, isBig = false, smallScreenHide = false }: { scrollYProgress: any, start: Array<number>, end: Array<number>, bg: string, isBig?: boolean, smallScreenHide?: boolean }) => {
    const positionX = useTransform(scrollYProgress, [0.5, 0.6], [start[0], end[0]]);
    const positionY = useTransform(scrollYProgress, [0.5, 0.6], [start[1], end[1]]);

    const springedPositionX = useSpring(positionX);
    const springedPositionY = useSpring(positionY);

    return <motion.div
        className={`service ${isBig ? 'big' : ''} ${smallScreenHide ? 'hide' : ''}`}
        style={{ top: springedPositionY, left: springedPositionX, backgroundImage: `url("${bg}")` }} />
}

const Services = ({ servicesRef }: { servicesRef: MutableRefObject<null | HTMLDivElement> }) => {
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll({ target: servicesRef, offset: ['start end', 'end end'] });
    const secondBlockY = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const secondBlockHeight = useTransform(scrollYProgress, [0, 1], [window.innerHeight, window.innerHeight - 399]);

    const h2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
    const h2Y = useTransform(scrollYProgress, [0.4, 0.5], [10, 0]);
    const pOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
    const pY = useTransform(scrollYProgress, [0.5, 0.6], [10, 0]);

    // const color = useTransform(scrollYProgress, [0, 0.67], ['#000', '#fff'])

    return <motion.div style={{ height: secondBlockHeight }}>
        <motion.div className='services' ref={servicesRef} style={{ position: 'relative', y: secondBlockY }}>
            <div className='body'>
                <motion.h2 style={{ y: h2Y, opacity: h2Opacity }}>{t("Volunteering-made-easy.")}<br />{t("only-one-click-away.")}</motion.h2>
                <motion.p style={{ y: pY, opacity: pOpacity }}>{t("From-quick-volunteer-gigs-to-meaningful-donations,-we-connect-communities-with-support-while-empowering-teens-to-earn-and-give-back,-seamlessly-and-affordably.")}</motion.p>
            </div>
            <div>
                <Service
                    scrollYProgress={scrollYProgress}
                    start={[window.innerWidth / 2.7, window.innerHeight / 4.61]}
                    end={[window.innerWidth / 2.6, window.innerHeight / 7]}
                    bg={"img2.jpg"}
                    isBig={true} />
                <Service scrollYProgress={scrollYProgress}
                    start={[window.innerWidth / 2.49, window.innerHeight / 2.14]}
                    end={[window.innerWidth / 9 , window.innerHeight / 4.5]}
                    bg="img1.jpg" />
                <Service scrollYProgress={scrollYProgress}
                    start={[window.innerWidth / 2.855, window.innerHeight / 1.88]}
                    end={[window.innerWidth / 8.76, window.innerHeight / 1.91]}
                    bg="img4.jpg"
                    isBig={true}
                    smallScreenHide={true} />
                <Service scrollYProgress={scrollYProgress}
                    start={[window.innerWidth / 2.14, window.innerHeight / 1.77]}
                    end={[window.innerWidth / 4, window.innerHeight / 1.3]}
                    bg="img3.jpg" />
                <Service scrollYProgress={scrollYProgress}
                    start={[window.innerWidth / 1.88, window.innerHeight / 2]}
                    end={[window.innerWidth / 1.82, window.innerHeight / 1.29]}
                    bg="img5.jpg"
                    isBig={true} />
                <Service scrollYProgress={scrollYProgress}
                    start={[window.innerWidth / 1.95, window.innerHeight / 2.49]}
                    end={[window.innerWidth / 1.38, window.innerHeight / 5]}
                    bg="img7.jpg" />
                <Service scrollYProgress={scrollYProgress}
                    start={[window.innerWidth / 2, window.innerHeight / 2.05]}
                    end={[window.innerWidth / 1.2, window.innerHeight / 4]}
                    bg="img6.jpg"
                    isBig={true}
                    smallScreenHide={true} />
                <Service scrollYProgress={scrollYProgress}
                    start={[window.innerWidth / 2.05, window.innerHeight / 2.37]}
                    end={[window.innerWidth / 1.32, window.innerHeight / 1.8]}
                    bg="img8.jpg"
                    smallScreenHide={true} />
            </div>
        </motion.div>
    </motion.div>
}

function Landing() {
    const { i18n: { language } } = useTranslation();
    const servicesRef = useRef<null | HTMLDivElement>(null)
    // const w = useTransform(enteringTitleProgress, [0, 1], ['0%', '100%'])

    console.log(window.innerHeight);
    return (
        <div className={`landing ${language}`}>
            {/* <div style={{ width: '100vw', position: 'fixed', height: 3, backgroundColor: "#000", 'zIndex': 100, top: 100 }}>
                <motion.div style={{ height: '100%', backgroundColor: "#0f0", width: w }} />
            </div> */}

            <Navbar servicesRef={servicesRef} />
            <Hero />
            <About />
            <Joining />
            <Services servicesRef={servicesRef} />
        </div>
    )
}

export default Landing