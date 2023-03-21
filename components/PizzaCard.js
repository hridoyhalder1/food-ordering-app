import Image from 'next/image';
import React from 'react';
import styles from '../styles/PizzaCard.module.css';


const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src='/img/pizza.png' alt='pizza' height="200" width="200" draggable="false"></Image>
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.99</span>
            <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
};

export default PizzaCard;