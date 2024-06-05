import { useRef, useEffect, useState } from 'react';
import React from 'react';
import '../index.css'
import styles from './Main.module.css';

const Main: React.FC = () => {
    const [price, setPrice] = useState<number | any>(0);
    const [change, setChange] = useState(0);

    const options = {
        method: 'GET'
    };

    fetch('https://api.cryptorank.io/v1/currencies/2?api_key=dfbb1189a71297ea242c59bf2fa6a8bb77f12478f19f928992760a1d687e', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let cur_price = response.data.values.USD.price / 100 * 97.75
        let cur_change = response.data.values.USD.percentChange24h
        setPrice(cur_price.toFixed(4))
        setChange(cur_change.toFixed(2))
    })
    .catch(err => console.error(err));

    const leftBgRef = useRef<HTMLImageElement | null>(null);
    const rightBgRef = useRef<HTMLImageElement | null>(null);
    const graphRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (leftBgRef.current) {
                const scrolled = window.scrollY;
                leftBgRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
                const opacity = Math.max(0, Math.min(1, 1 - scrolled / 750));
                leftBgRef.current.style.opacity = opacity.toString();
            }
            if (rightBgRef.current) {
                const scrolled = window.scrollY;
                rightBgRef.current.style.transform = `translateY(${scrolled * 0.25}px)`;
                const opacity = Math.max(0, Math.min(1, 1 - scrolled / 750));
                rightBgRef.current.style.opacity = opacity.toString();
            }
            if (graphRef.current) {
                const scrolled = window.scrollY;
                graphRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
                const opacity = Math.max(0, Math.min(1, 1 - scrolled / 750));
                graphRef.current.style.opacity = opacity.toString();
            }
        };

        const element = leftBgRef.current;
        if (element) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <div className={styles.title_block}>
                        <p className={styles.title}>Курс монеты<br/>в адресе <span style={{ color: '#0F4FE3' }}>MAINNET</span></p>
                    </div>

                    <div className={styles.coin_block}>
                        <div className={styles.coin_bg} />

                        <div className={styles.coin_container}>
                            <div style={{ margin: 'auto' }}>
                                <div className={styles.logo_block}>
                                    <img src='./logo_main.svg' className={styles.logo} />

                                    <p className={styles.text}>EOS/USD</p>
                                </div>

                                { price == 0 ?
                                    <p className={styles.price} style={{backgroundColor: '#FFF', borderRadius: '10px', opacity: '0.55'}}>ㅤ</p>
                                :
                                <p className={styles.price}>${price}</p>
                                }

                                { price == 0 ?
                                    <p className={styles.change} style={{backgroundColor: '#FFF', borderRadius: '10px', opacity: '0.55', marginTop: '10px'}}>ㅤ</p>
                                :
                                    <p className={styles.change} style={change < 0 ? {color: '#FF0000'} : {color: '#24FF00'}}>{change}% (24h)</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <img className={styles.graph} ref={graphRef} src='./graph_main.png' />

                <img className={styles.left_bg} ref={leftBgRef} src='./bg_main_left.png' />

                <img className={styles.right_bg} ref={rightBgRef} src='./bg_main_right.png' />

                <div className={styles.gradient_bg} />

                <div className={styles.transition} />
            </div>
        </>
    )
}

export default Main