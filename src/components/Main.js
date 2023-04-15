import HomePage from "./Home/HomePage";
import {Route, Routes} from "react-router-dom";
import BookingPage from "./Booking/BookingPage";
import {useReducer} from "react";

export const updateTimes = (availableTimes, action) => {
    return availableTimes
}

export const initializeTimes = () => ([
    "17.00", "18.00", "19.00", "20.00", "21.00", "22.00"
])
const Main = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    console.log('times', availableTimes)

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
            </Routes>
        </main>
    );
}

export default Main;