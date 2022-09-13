import React from 'react';
import pose3 from '../../images/pose3.png';
import ellipse1 from '../../images/ellipse1.png';
import ellipse2 from '../../images/ellipse2.png';
import sanitizer from '../../images/sanitizer.png';
import mask from '../../images/mask.png';
import thermogun from '../../images/thermogun.png';
import doctor from '../../images/doctor.png';
import doctorbg from '../../images/doctorbg.png';
import exclusive from '../../images/exclusive.png';
import exclusivebg from '../../images/exclusivebg.png';
import friendly from '../../images/friendly.png';
import friendlybg from '../../images/friendlybg.png';
import nurse from '../../images/nurse.png';
import nursebg from '../../images/nursebg.png';

const Feature = () => {
    return (
        <div className='md:flex justify-between mb-12 px-20 lg:px-40'>
            <div className='relative'>
                <img src={ellipse1} className='absolute w-1/2 top-8 left-20' alt="" />
                <img src={ellipse2} className='absolute bottom-32' alt="" />
                <img src={sanitizer} className='absolute bottom-56 left-4' alt="" />
                <img src={mask} className='absolute left-16' alt="" />
                <img src={thermogun} className='absolute bottom-56 right-4' alt="" />
                <img src={pose3} className='relative' alt="" />
            </div>

            <div className='sm:w-full md:w-3/5'>
                <h1 className='text-xl text-secondary font-semibold'>Our Hospital Feature</h1>
                <h2 className='text-4xl font-semibold mt-3'>Make An Appointment Easy And Fast Services</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-6'>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <div className="card-body relative">
                            <h2 className="font-semibold">24 Hours Doctor Support</h2>
                            <p className='my-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <div className='absolute top-3 right-3'>
                                <img src={doctorbg} alt="" />
                            </div>
                            <div className='absolute top-4 right-4'>
                                <img src={doctor} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact bg-base-100 shadow-xl">
                        <div className="card-body relative">
                            <h2 className="font-semibold">Exclusive Supports</h2>
                            <p className='my-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <div className='absolute top-3 right-3'>
                                <img src={exclusivebg} alt="" />
                            </div>
                            <div className='absolute top-4 right-4'>
                                <img src={exclusive} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact bg-base-100 shadow-xl">
                        <div className="card-body relative">
                            <h2 className="font-semibold">Friendly Environment</h2>
                            <p className='my-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <div className='absolute top-3 right-3'>
                                <img src={friendlybg} alt="" />
                            </div>
                            <div className='absolute top-4 right-4'>
                                <img src={friendly} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact bg-base-100 shadow-xl">
                        <div className="card-body relative">
                            <h2 className="font-semibold">24 Hours Nurse Support</h2>
                            <p className='my-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <div className='absolute top-3 right-3'>
                                <img src={nursebg} alt="" />
                            </div>
                            <div className='absolute top-4 right-4'>
                                <img src={nurse} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;