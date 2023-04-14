import React from 'react';

import styles from "./Specials.module.css";

const data = [
    {
        id: 1,
        topic: 'Greek Salad',
        price: '$12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        image: './greekSalad.jpg'
    },
    {
        id: 2,
        topic: 'Bruschetta',
        price: '$7.99',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork',
        image: './bruschetta.jpg'
    },
    {
        id: 3,
        topic: 'Lemon Desert',
        price: '$5.00',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        image: './lemonDessert.jpg'
    }
]
const Specials = () => {
    return (
        <div id="menu" className={styles.specialsContainer}>
            <div></div>
            <div>
                <div className={styles.heading}>
                    <h2>This weeks specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div className={styles.cardsContainer}>
                    {data.map((item) => {
                        return (
                            <div className={styles.card}>
                                <img src={item.image} alt={item.topic}/>
                                    <div className={styles.description}>
                                    <div>
                                        <h6 className={styles.topic}>{item.topic}</h6>
                                        <div className={styles.price}>{item.price}</div>
                                    </div>
                                    <p className={styles.details}>{item.description}</p>
                                    <div className={styles.orderContainer}>
                                        <p><a>Order a delivery</a></p>
                                        <img src="./delivery.svg" alt="delivery" />
                                    </div>
                                </div>
                            </div>
                    )})}
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Specials;
