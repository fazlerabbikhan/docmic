import React from 'react';
import pose3 from '../../images/pose3.png';
import ellipse1 from '../../images/ellipse1.png';
import doctor from '../../images/doctor.png';
import exclusive from '../../images/exclusive.png';
import friendly from '../../images/friendly.png';
import nurse from '../../images/nurse.png';

const Feature = () => {
    return (
        <div className='md:flex justify-between mt-12'>
            <div style={{
                background: `url(${ellipse1})`,
                backgroundSize: 'cover'
            }}>
                <img src={pose3} alt="pose3" />
            </div>

            <div className='w-3/5'>
                <h1 className='text-secondary'>Our Hospital Feature</h1>
                <h2 className='text-4xl font-semibold mt-3'>Make An Appointment Easy And Fast Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-12'>
                    <div className="card card-compact w-72 bg-base-100 shadow-xl">
                        <div className="card-body relative">
                            <h2 className="font-semibold">24 Hours Doctor Support</h2>
                            <p className='my-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <div className='absolute top-4 right-4'>
                                <img src={doctor} alt="doctor" />
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact w-72 bg-base-100 shadow-xl">
                        <div className="card-body relative">
                            <h2 className="font-semibold">Exclusive Supports</h2>
                            <p className='my-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <div className='absolute top-4 right-4'>
                                <img src={exclusive} alt="exclusive" />
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact w-72 bg-base-100 shadow-xl">
                        <div className="card-body relative">
                            <h2 className="font-semibold">Friendly Environment</h2>
                            <p className='my-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <div className='absolute top-4 right-4'>
                                <img src={friendly} alt="friendly" />
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact w-72 bg-base-100 shadow-xl">
                        <div className="card-body relative">
                            <h2 className="font-semibold">24 Hours Nurse Support</h2>
                            <p className='my-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <div className='absolute top-4 right-4'>
                                <img src={nurse} alt="nurse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;