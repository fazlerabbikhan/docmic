import React from 'react';
import Experiences from './Experiences';
import Header from './Header';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Experiences></Experiences>
        </div>
    );
};

export default Home;