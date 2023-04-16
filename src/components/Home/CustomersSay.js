import React from 'react';

import styles from "./CustomersSay.module.css";

const data = [
    {
        id: 1,
        name: 'John Stone',
        stars: './stars.png',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.',
        avatar: './john.jpeg'
    },
    {
        id: 2,
        name: 'Mia Wong',
        stars: './stars.png',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.',
        avatar: './mia.jpeg'
    },
    {
        id: 3,
        name: 'Peter Burch',
        stars: './stars.png',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.',
        avatar: './peter.jpeg'
    },
    {
        id: 4,
        name: 'Jane Smith',
        stars: './stars.png',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.',
        avatar: './jane.jpeg'
    },
]
const CustomersSay = () => {
    return (
        <div className={styles.customersSayContainer}>
            <div></div>
            <div>
                <h2 className={styles.title}>Testimonials</h2>
                <div className={styles.testimonials}>
                    {data.map((item) => {
                        return (
                            <div key={item.id} className={styles.reviewCard}>
                                <div className={styles.user}>
                                    <img className={styles.avatar} src={item.avatar} alt={item.name}/>
                                    <h6>{item.name}</h6>
                                    <img className={styles.star} src={item.stars} alt="stars"/>
                                    <p className={styles.review}>{item.review}</p>
                                </div>
                            </div>
                        )})}
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default CustomersSay;
