import React from 'react';
import { Link } from 'react-router-dom';
import pose1 from '../../images/pose1.png';
import tic from '../../images/tic.png';
import ellipse1 from '../../images/ellipse1.png';

const Header = () => {
    return (
        <div className='my-20 px-20 lg:px-40'>
            <div className='md:flex justify-between'>
                <div>
                    <h1 className='text-6xl font-semibold w-4/5'>Your <span className='text-primary'>Health</span> Is Our Top <span className='text-secondary'>Priority</span></h1>
                    <p className='mt-6 w-3/5'>There are many variations of passages of lpsum available, but the majority hae suffered.</p>
                    <button className='mt-8'>
                        <Link className='btn btn-primary' to='/'>Meet Our Specialist</Link>
                    </button>

                    <div className='md:flex justify-around mt-12'>
                        <div>
                            <h1 className='text-2xl text-secondary text-center font-semibold'>262k+</h1>
                            <h2 className='text-center'>Recovered Patients</h2>
                        </div>
                        <div>
                            <h1 className='text-2xl text-secondary text-center font-semibold'>96%</h1>
                            <h2 className='text-center'>Satisfaction Rate</h2>
                        </div>
                        <div>
                            <h1 className='text-2xl text-secondary text-center font-semibold'>86+</h1>
                            <h2 className='text-center'>Expert Doctors</h2>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img src={ellipse1} className="absolute" alt="" />
                    <img src={pose1} className="relative" alt="" />
                    <button className='relative bottom-28 -left-20'>
                        <Link className='btn btn-secondary' to='/'><img src={tic} className='pt-2' alt="" />Regular Checkup</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;