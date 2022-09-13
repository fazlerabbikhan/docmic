import React from 'react';
import { Link } from 'react-router-dom';
import cardiology from '../../images/cardiology.png';
import checkup from '../../images/chekup.png';
import dental from '../../images/dental.png';
import opthalmology from '../../images/opthalmology.png';

const Services = () => {
    return (
        <div className='mb-12 px-20 lg:px-40'>
            <div>
                <h1 className='text-xl text-secondary text-center font-semibold'>Our Services</h1>
                <h2 className='text-4xl text-center font-semibold mt-4'>Services For Your Health</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body relative">
                        <h2 className="font-semibold">Cardiology</h2>
                        <p className='my-4'>Seduahag perspiciati under omnised atused error.</p>
                        <div className="card-actions justify-start">
                            <Link to='/' className='text-xl hover:text-primary font-semibold'>Explore Now</Link>
                        </div>
                        <div className='absolute top-4 right-4'>
                            <img src={cardiology} alt="cardiology" />
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body relative">
                        <h2 className="font-semibold">Monthly Check Up</h2>
                        <p className='my-4'>Seduahag perspiciati under omnised atused error.</p>
                        <div className="card-actions justify-start">
                            <Link to='/' className='text-xl hover:text-primary font-semibold'>Explore Now</Link>
                        </div>
                        <div className='absolute top-4 right-4'>
                            <img src={checkup} alt="checkup" />
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body relative">
                        <h2 className="font-semibold">Dental Care</h2>
                        <p className='my-4'>Seduahag perspiciati under omnised atused error.</p>
                        <div className="card-actions justify-start">
                            <Link to='/' className='text-xl hover:text-primary font-semibold'>Explore Now</Link>
                        </div>
                        <div className='absolute top-4 right-4'>
                            <img src={dental} alt="dental" />
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body relative">
                        <h2 className="font-semibold">Opthalmology</h2>
                        <p className='my-4'>Seduahag perspiciati under omnised atused error.</p>
                        <div className="card-actions justify-start">
                            <Link to='/' className='text-xl hover:text-primary font-semibold'>Explore Now</Link>
                        </div>
                        <div className='absolute top-4 right-4'>
                            <img src={opthalmology} alt="opthalmology" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;