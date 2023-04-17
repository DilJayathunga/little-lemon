import React from 'react';
import styles from "./Hero.module.css";
import {useNavigate} from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate()
    return (
        <div className={styles.heroContainer}>
            <div></div>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button aria-label="On Click" onClick={() => navigate("/booking")}>Reserve a Table</button>
            </div>
            <div>
                <img className={styles.heroImg} src="/hero.jpg" alt="hero" />
            </div>
            <div></div>
        </div>
    );
};

export default Hero;
