import Image from 'next/legacy/image';
import React from 'react';
import styles from '../../styles/Order.module.css';

const Order = () => {

    const status = 0;
    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.unDone;
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.tr}>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td>
                                    <span className={styles.id}>1435676543</span>
                                </td>
                                <td>
                                    <span className={styles.name}>
                                        John Doe
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.address}>Newyork</span>
                                </td>
                                <td>
                                    <span className={styles.total}>$79.80</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image alt='' src='/img/paid.png' width={30} height={30}></Image>
                        <span>Payment</span>
                        <div className={styles.checkedIcon}></div>
                        <Image alt='' className={styles.checkedIcon} src='/img/checked.png' width={20} height={20}></Image>
                    </div>
                    <div className={statusClass(1)}>
                        <Image alt='' src='/img/bake.png' width={30} height={30}></Image>
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}></div>
                        <Image alt='' className={styles.checkedIcon} src='/img/checked.png' width={20} height={20}></Image>
                    </div>
                    <div className={statusClass(2)}>
                        <Image alt='' src='/img/bike.png' width={30} height={30}></Image>
                        <span>On the way</span>
                        <div className={styles.checkedIcon}></div>
                        <Image alt='' className={styles.checkedIcon} src='/img/checked.png' width={20} height={20}></Image>
                    </div>
                    <div className={statusClass(3)}>
                        <Image alt='' src='/img/delivered.png' width={30} height={30}></Image>
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}></div>
                        <Image alt='' className={styles.checkedIcon} src='/img/checked.png' width={20} height={20}></Image>
                    </div>

                </div>

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
                    <button type="submit" disabled className={styles.button}>PAID</button>
                </div>
            </div>

        </div>
    );
};

export default Order;