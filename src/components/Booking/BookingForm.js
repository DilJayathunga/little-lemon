import React, { useState} from 'react';

import styles from "./BookingForm.module.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("init");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("init");

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
        setDate("")
        setTime("init")
        setGuests(1)
        setOccasion("init")
    }

    const getIsFormValid = () => {
        return (
            date &&
            time !== 'init' &&
            occasion !== 'init' &&
            guests <= 10 && guests >=1
        )
    }

    const callDispatch = (e) => () =>{
        dispatch({ type: "GET TIMES", date: e.target.value })
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
                        setDate(e.target.value);
                        callDispatch(e)
                    }}
                    required
                />
            </div>
            <div className={styles.formItem}>
                <label htmlFor="res-time">Choose time</label>
                <select aria-label="time" required id="res-time " value={time} onChange={e => setTime(e.target.value)}>
                    <option value="init" disabled>Select a time</option>
                    {availableTimes?.map(time => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
            </div>
            <div className={styles.formItem}>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={e => setGuests(e.target.value)}
                    aria-label="guests"
                    required
                />
            </div>
            <div className={styles.formItem}>
                <label htmlFor="occasion">Occasion</label>
                <select aria-label="occasion" required id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option value="init" disabled>Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <div className={styles.formItem}>
                <button aria-label="On Click" disabled={!getIsFormValid()} type="submit">Make Your reservation</button>
            </div>
        </form>
    );
};

export default BookingForm;
