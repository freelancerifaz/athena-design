import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Achievements from "../Achievements/Achievements";
import Features from '../Feature/Features';
import Service from '../Service/Service';
import DedicatedTeam from '../DedicatedTeam/DedicatedTeam';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Service></Service>
            <Features></Features>
            <Achievements className = "mb-5"></Achievements>
            <DedicatedTeam></DedicatedTeam>
            <Footer></Footer>
        </div>
    );
};

export default Home;