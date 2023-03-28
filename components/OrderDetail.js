import React, { useState } from 'react';
import styles from '../styles/OrderDetail.module.css';

const OrderDetail = ({ total, createOrder}) => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

    const handleClick = () => {
        createOrder({ customer, address, total, method:0})
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will pay $12 after delivery!</h1>
                <div className={styles.item}>
                    <label htmlFor="" className={styles.label}>Name Surename</label>
                    <input type="text" placeholder='John Doe' className={styles.input} onChange={(e) => setCustomer(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label htmlFor="" className={styles.label}>Phone Number</label>
                    <input type="text"
                        placeholder='+8801863901163'
                        className={styles.input}
                        onChange={(e) => setCustomer(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label htmlFor="" className={styles.label}>Address</label>
                    <textarea
                        type="text"
                        rows={5}
                        placeholder="1654 R. Don Road #304."
                        className={styles.textarea}
                        onChange={(e) => setAddress(e.target.value)}></textarea>
                </div>
                <button className={styles.button} onClick={handleClick}>Order</button>
            </div>

        </div>
    );
};

export default OrderDetail;