import React from 'react';
import '../index.css'
import styles from './AboutEOS.module.css';

const AboutEOS: React.FC = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <div className={styles.text_block}>
                        <p className={styles.title}>О проекте EOS</p>

                        <p className={styles.description}>EOSIO — ведущая платформа с открытым исходным кодом для инноваций и повышения производительности блокчейна. Предприятия и разработчики по всему миру используют EOSIO для создания безопасных, прозрачных и детерминированных цифровых инфраструктур.</p>
                    
                        <div className={styles.button} onClick={aboutEOS}>
                            <p className={styles.button_text}>Подробнее</p>

                            <img className={styles.arrow} src='./Arrow_Right_LG_w.svg' />
                        </div>
                    </div>

                    <img src='./abouteos_img_2.png' className={styles.image_2} />
                </div>

                <img src='./abouteos_img.png' className={styles.image} />
            </div>
        </>
    )
}

const aboutEOS = () => {
    window.location.href = 'https://eos.io/about/'
}

export default AboutEOS