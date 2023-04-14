import React from 'react';

import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <div></div>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div>
                <img className={styles.heroImg} src="./hero.jpg" alt="hero" />
            </div>
            <div></div>
        </div>
    );
};

export default Hero;
