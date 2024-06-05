import React from 'react';
import '../index.css'
import styles from './WhyUs.module.css';

const WhyUs: React.FC = () => {
    return (
        <>
            <div className={styles.flex} id='whyUs'>
                <div className={styles.container}>
                    <img className={styles.image} src='./whyus_pic.png' />

                    <div className={styles.text_block}>
                        <p className={styles.title}>Почему EOS mainnet?</p>

                        <p className={styles.description}>Транзакции в данном адресе имеют высокую скорость и используется реальный курс монеты, который формируется на главной DEX площадке. Также, адрес не взимает комиссию за транзакции.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs