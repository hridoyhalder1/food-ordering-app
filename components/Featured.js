import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../styles/Featured.module.css';

const Featured = () => {
    const [index, setIndex] = useState(0);

    const images = [
        "/img/featured.png",
        "/img/featured1.png",
        "/img/featured2.png"
    ];
    const handleArrow = (direction) => {
        if(direction === "l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction === "r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
    console.log(index);

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=> handleArrow("l")}>
                <Image src='/img/arrowl.png' alt='' layout='fill' style={{objectFit: 'contain'}} ></Image>
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
                
                    {images.map((img, i) => (
                       <div className={styles.imgContainer} key={i} >
                         <Image src={img} width={1000} height={500} alt='' style={{objectFit: 'contain'}} ></Image>
                       </div>
                    ))}
                
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=> handleArrow("r")}>
                <Image src='/img/arrowr.png' alt='' layout='fill' style={{objectFit: 'contain'}} ></Image>
            </div>
        </div>
    );
};

export default Featured;