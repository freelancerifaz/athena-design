import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Achievements from "../Achievements/Achievements";
import Features from '../Feature/Features';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Service></Service>
            <Achievements></Achievements>
            <Features></Features>
        </div>
    );
};

export default Home;