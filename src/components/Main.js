import HomePage from "./Home/HomePage";
import {Route, Routes, useNavigate} from "react-router-dom";
import BookingPage from "./Booking/BookingPage";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../api"
import ConfirmedBooking from "./Booking/ConfirmedBooking";

const fetchData = (date) => {
    return fetchAPI(date)
};
export const updateTimes = (state, action) => {
    const newDate = new Date(action.date)
    switch (action.type) {
        case "GET TIMES":
            return fetchData(newDate)
        default:
            return state;
    }
}

export const initializeTimes = () => {
    const today = new Date()
    return fetchData(today)
}
const Main = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate()
    
    const submitForm = (formData) => {
        if(submitAPI(formData)){
            navigate('/confirmedBooking')
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={
                    <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
                }></Route>
                <Route path="/confirmedBooking" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    );
}

export default Main;