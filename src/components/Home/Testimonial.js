import React from 'react';
import pose5 from '../../images/pose5.png';
import previous from '../../images/previous.png';
import next from '../../images/next.png';
import { Link } from 'react-router-dom';

const Testimonial = () => {
    return (
        <div className='mb-12 px-20 lg:px-40'>
            <div>
                <h1 className='text-xl text-secondary text-center font-semibold'>Testimonial</h1>
                <h2 className='text-4xl text-center font-semibold mt-3'>What They Say?</h2>
            </div>

            <div className='flex justify-between md:mx-20 mt-12'>
                <div className='flex items-center mr-6'>
                    <button className='btn btn-circle bg-blue-200 hover:bg-secondary'>
                        <Link to='/'><img src={previous} alt="previous" /></Link>
                    </button>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <div className='w-3/5'>
                                <h2 className="text-xl font-semibold">David Jeams</h2>
                                <h2 className="font-semibold">Patient</h2>
                                <p className='my-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                            </div>

                            <div>
                                <img src={pose5} className='w-full' alt="pose5" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center ml-6'>
                    <button className='btn btn-circle bg-blue-200 hover:bg-secondary'>
                        <Link to='/'><img src={next} alt="next" /></Link>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;