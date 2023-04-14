import React from 'react';

import styles from "./Chicago.module.css";

const Chicago = () => {
    return (
        <div id="about" className={styles.chicagoContainer}>
            <div></div>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                </p>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.imgB} src="./chicagoB.jpg" alt="b" />
                <img className={styles.imgA} src="./chicagoA.jpg" alt="a" />
            </div>
            <div></div>
        </div>
    );
};

export default Chicago;
