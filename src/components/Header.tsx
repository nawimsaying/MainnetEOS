import React from 'react';
import '../index.css'
import styles from './Header.module.css';
import {animateScroll as scroll} from "react-scroll";

const Header: React.FC = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <img className={styles.logo} src='./logo_footer.svg' />

                    <div className={styles.links_block}>
                        <a className={styles.link} href='https://eos.io/for-developers/'>Разработчикам</a>
                        <a className={styles.link} href='https://eos.io/eos-public-blockchain/'>Блокчейн EOS</a>
                        <a className={styles.link} onClick={aboutUsButton}>О нас</a>
                    </div>

                    <div className={styles.button} onClick={contactButton}>
                        <p className={styles.button_text}>Связаться</p>

                        <img className={styles.arrow} src='./Paper_Plane.svg' />
                    </div>
                </div>
            </div>
        </>
    )
}

const contactButton = () => {
    const target = document.querySelector("#contact");
    if (target) {
        const offset = target.getBoundingClientRect().top + window.pageYOffset;
        scroll.scrollTo(offset, {
            duration: 800,
            smooth: "easeInOutQuart"
        });
    }
}

const aboutUsButton = () => {
    const target = document.querySelector("#aboutUs");
    if (target) {
        const offset = target.getBoundingClientRect().top + window.pageYOffset;
        scroll.scrollTo(offset, {
            duration: 800,
            smooth: "easeInOutQuart"
        });
    }
}

export default Header