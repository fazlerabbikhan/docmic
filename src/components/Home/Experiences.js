import React from 'react';
import pose2 from '../../images/pose2.png';
import ellipse1 from '../../images/ellipse1.png';

const Experiences = () => {
    return (
        <div className='md:flex justify-between mb-12 px-20 lg:px-40'>
            <div className='md:w-3/5'>
                <h1 className='text-xl text-secondary font-semibold'>16+ Years Experiences</h1>
                <h2 className='text-4xl font-semibold mt-3'>We Are Always ensure Best Medical Treatment For Your Health</h2>
                <p className='mt-3'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
            </div>

            <div style={{
                background: `url(${ellipse1})`,
                backgroundSize: 'cover'
            }}>
                <img src={pose2} alt="pose2" />
            </div>
        </div>
    );
};

export default Experiences;