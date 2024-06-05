import React from 'react';
import '../index.css'
import styles from './AboutUs.module.css';
import {animateScroll as scroll} from "react-scroll";

const AboutUs: React.FC = () => {
    return (
        <>
            <div className={styles.flex} id='aboutUs'>
                <div className={styles.container}>
                    <div className={styles.photo_block}>
                        <img className={styles.photo} src='./about_us_pic.png' />
                    </div>

                    <div className={styles.text_block}>
                        <div className={styles.text_container}>
                            <p className={styles.title}>О нас</p>

                            <p className={styles.description}>Адрес mainnet в сети EOS предоставляет реальную пропускную способность в сети EOS. Также, адрес имеет реальный курс монеты, который независим от посторонних площадок. Используйте свой memo, чтобы совершать транзакции в данном адресе.</p>

                            <div className={styles.button} onClick={detailsButton}>
                                <p className={styles.button_text}>Подробнее</p>
                                
                                <img className={styles.arrow} src='./Arrow_Right_LG.svg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const detailsButton = () => {
    const target = document.querySelector("#whyUs");
    if (target) {
        const offset = target.getBoundingClientRect().top + window.pageYOffset;
        scroll.scrollTo(offset, {
            duration: 800,
            smooth: "easeInOutQuart"
        });
    }
}

export default AboutUs