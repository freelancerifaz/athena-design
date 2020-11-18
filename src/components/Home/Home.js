import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Achievements from "../Achievements/Achievements";
import Features from '../Feature/Features';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeaderMain />
            <Features />
            <Achievements />
        </div>
    );
};

export default Home;