import Image from 'next/image';
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" alt='' layout='fill' ></Image>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <h2 className={styles.motto}>OH YES, WE DID THE <br/> LAMA PIZZA, WELL BAKED SLICE OF PIZZA.</h2>
                    </div>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTURANTS</h1>
                    <p className={styles.text}>
                        1654 R. Don Road #304.
                        <br />NewYork, 88333
                        <br />(+8801863901163)
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road #304.
                        <br />NewYork, 88333
                        <br />(+8801863901163)
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road #304.
                        <br />NewYork, 88333
                        <br />(+8801863901163)
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road #304.
                        <br/>NewYork, 88333
                        <br/>(+8801863901163)
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTILL FRIDAY
                        <br/>9.00 - 22.00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br/>12.00 - 24.00
                    </p>
                </div>
                
            </div>

        </div>
    );
};

export default Footer;