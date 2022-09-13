import React from 'react';
import pose5 from '../../images/pose5.png';

const Testimonial = () => {
    return (
        <div className='mt-12'>
            <div>
                <h1 className='text-xl text-secondary text-center font-semibold'>Testimonial</h1>
                <h2 className='text-4xl text-center font-semibold mt-4'>What They Say?</h2>
            </div>

            <div className="card card-compact md:mx-20 lg:mx-40 bg-base-100 shadow-xl mt-12">
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
        </div>
    );
};

export default Testimonial;