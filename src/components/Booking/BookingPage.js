import React from 'react';

import styles from "./BookingPage.module.css";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch }) => {
    return (
        <>
            <div className={styles.headContainer}>
                <div></div>
                <div className={styles.titleText}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <div>
                    <img className={styles.reservationImgA} src="./restaurant.jpg" alt="reservationA" />
                </div>
                <div></div>
            </div>
            <div className={styles.bookingContainer}>
                <div></div>
                <div>
                    <h2>Find a table for any occasion</h2>
                    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
                </div>
                <div></div>
            </div>
        </>

    );
};

export default BookingPage;
