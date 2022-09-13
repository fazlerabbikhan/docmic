import React from 'react';
import Experiences from './Experiences';
import Feature from './Feature';
import Header from './Header';
import Questions from './Questions';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Experiences></Experiences>
            <Feature></Feature>
            <Questions></Questions>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;