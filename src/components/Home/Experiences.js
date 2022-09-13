import React from 'react';
import pose2 from '../../images/pose2.png';
import ellipse1 from '../../images/ellipse1.png';
import ellipse2 from '../../images/ellipse2.png';
import firstaid from '../../images/firstaid.png';
import plaster from '../../images/plaster.png';
import pressure from '../../images/pressure.png';

const Experiences = () => {
    return (
        <div className='md:flex justify-between mb-12 px-20 lg:px-40'>
            <div className='md:w-3/5'>
                <h1 className='text-xl text-secondary font-semibold'>16+ Years Experiences</h1>
                <h2 className='text-4xl font-semibold mt-3'>We Are Always ensure Best Medical Treatment For Your Health</h2>
                <p className='mt-3'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
            </div>

            <div className='relative'>
                <img src={ellipse1} className='absolute w-1/2 left-20' alt="" />
                <img src={ellipse2} className='absolute bottom-0' alt="" />
                <img src={firstaid} className='absolute top-10' alt="" />
                <img src={plaster} className='absolute bottom-20 left-20' alt="" />
                <img src={pressure} className='absolute -top-2 right-6' alt="" />
                <img src={pose2} className='relative' alt="" />
            </div>
        </div>
    );
};

export default Experiences;