import React from 'react';
import Experiences from './Experiences';
import Feature from './Feature';
import Header from './Header';
import Questions from './Questions';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Experiences></Experiences>
            <Feature></Feature>
            <Questions></Questions>
        </div>
    );
};

export default Home;