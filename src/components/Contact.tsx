import React from 'react';
import '../index.css'
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    return (
        <>
            <div className={styles.flex} id="contact">
                <div className={styles.container}>
                    <div className={styles.text_block}>
                        <p className={styles.title}>Связаться с нами</p>

                        <p className={styles.description}>Дайте нам знать, как мы можем помочь.</p>
                    </div>

                    <div className={styles.email_block}>
                        <p className={styles.email_text}>{email}</p>

                        <img onClick={copyText} src='./Copy.svg' style={{ width: '36px', height: '36px', margin: 'auto', objectFit: 'contain', marginRight: '25px', cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

var email = 'mainneteos@gmail.com'

function copyText() {
    var copyText = email;

    navigator.clipboard.writeText(copyText);
  
    alert("Почта скопирована в буфер обмена.");
}

export default Contact