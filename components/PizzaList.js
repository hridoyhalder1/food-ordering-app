import React from 'react';
import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi distinctio perferendis sequi, quae veritatis soluta. Amet, dolore veritatis debitis commodi eius, molestiae nisi repellendus possimus aspernatur ad impedit. Distinctio, doloribus?
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza}></PizzaCard>
                ))}
            </div>
        </div>
    );
};

export default PizzaList;