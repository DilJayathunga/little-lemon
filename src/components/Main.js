import HomePage from "./Home/HomePage";
import {Route, Routes} from "react-router-dom";
import BookingPage from "./Booking/BookingPage";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
    );
}

export default Main;