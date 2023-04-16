import React, {useState} from 'react';

import styles from "./BookingForm.module.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        }
        console.log('form data', data)
        submitForm(data)
    }

    return (
        <form className={styles.form} onSubmit={e => onFormSubmit(e)}>
            <div className={styles.formItem}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    aria-label="date"
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value)
                        dispatch({ type: "GET TIMES", date: e.target.value })
                    }}
                />
            </div>
            <div className={styles.formItem}>
                <label htmlFor="res-time">Choose time</label>
                <select aria-label="time" id="res-time " value={time} onChange={e => setTime(e.target.value)}>
                    {availableTimes?.map(time => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
            </div>
            <div className={styles.formItem}>
                <label htmlFor="guests">Number of guests</label>
                <input
                    aria-label="guests"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={e => setGuests(e.target.value)}
                />
            </div>
            <div className={styles.formItem}>
                <label htmlFor="occasion">Occasion</label>
                <select aria-label="occasion" id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <div className={styles.formItem}>
                <button type="submit">Make Your reservation</button>
            </div>
        </form>
    );
};

export default BookingForm;
