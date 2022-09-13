import React from 'react';
import Experiences from './Experiences';
import Feature from './Feature';
import Header from './Header';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Experiences></Experiences>
            <Feature></Feature>
        </div>
    );
};

export default Home;