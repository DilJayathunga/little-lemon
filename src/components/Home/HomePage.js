import React from 'react';
import Hero from "./Hero";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

const HomePage = () => {
    return (
        <>
            <Hero/>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
        </>
    );
};

export default HomePage;
