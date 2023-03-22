import Image from 'next/legacy/image';
import React from 'react';
import styles from '../styles/Cart.module.css';

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <tr  className={styles.tr}>
                            <td>
                            <div className={styles.imgContainer}>
                                <Image src='/img/pizza.png' layout='fill' objectFit='cover' alt='pizza'></Image>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                        </tr>
                        <tr  className={styles.tr}>
                            <td>
                            <div className={styles.imgContainer}>
                                <Image src='/img/pizza.png' layout='fill' objectFit='cover' alt='pizza'></Image>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                            <div className={styles.imgContainer}>
                                <Image src='/img/pizza.png' layout='fill' objectFit='cover' alt='pizza'></Image>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                            <div className={styles.imgContainer}>
                                <Image src='/img/pizza.png' layout='fill' objectFit='cover' alt='pizza'></Image>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>CART TOTAL</h3>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>SubTotal:</b>$79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$79.60
                    </div>
                    <button type="submit" className={styles.button}>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;