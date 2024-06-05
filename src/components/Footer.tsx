import React from 'react';
import '../index.css'
import styles from './Footer.module.css';
import {animateScroll as scroll} from "react-scroll";

const Footer: React.FC = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <img className={styles.logo} src='./logo_footer.svg' />

                    <div className={styles.container_links}>
                        <div className={styles.link_block}>
                            <a className={styles.link} href='https://eos.io/for-developers/'>Разработчикам</a>
                            <a className={styles.link} href='https://eos.io/resources/'>Библиотека ресурсов</a>
                            <a className={styles.link} href='https://eos.io/eos-public-blockchain/'>Блокчейн EOS</a>
                            <a className={styles.link} href='https://eos.io/news-insights/'>Новости</a>
                            <a className={styles.link} href='https://eos.io/events/'>События</a>
                            <a className={styles.link} onClick={detailsButton}>EOS mainnet</a>
                        </div>

                        <div className={styles.link_block}>
                            <a className={styles.link} href='https://block.one/'>Block.one</a>
                            <a className={styles.link} href='https://developers.eos.io/'>Портал разработчиков</a>
                            <a className={styles.link} href='https://github.com/EOSIO'>GitHub</a>
                            <a className={styles.link} href='https://eosio.stackexchange.com/'>Stack Exchange</a>
                        </div>

                        <div className={styles.link_block}>
                            <a className={styles.link} onClick={contactButton}>Связаться с нами</a>
                            <a className={styles.link} href='https://eos.io/faq/'>FAQs</a>
                            <a className={styles.link} href='https://eos.io/legal/privacy-policy/'>Политика конфиденциальности</a>
                            <a className={styles.link} href='https://eos.io/legal/terms-of-use/'>Условия эксплуатации</a>
                            <a className={styles.link} href='https://eos.io/legal/important-notice/'>Важное замечание</a>
                            <a className={styles.link} href='https://eos.io/feedback/'>Обратная связь</a>
                            <a className={styles.link} href='https://eos.io/security-vulnerabilities/'>Безопасность</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const detailsButton = () => {
    const target = document.querySelector("#aboutUs");
    if (target) {
        const offset = target.getBoundingClientRect().top + window.pageYOffset;
        scroll.scrollTo(offset, {
            duration: 800,
            smooth: "easeInOutQuart"
        });
    }
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

export default Footer