import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import google from '../../images/google.png';
import twitter from '../../images/twitter.png';
import youtube from '../../images/youtube.png';

const Footer = () => {
    return (
        <div className='bg-blue-100 p-12 grid grid-cols-1 lg:grid-cols-3 gap-y-5'>
            <div>
                <h1 className='text-xl font-bold'>
                    <span className='text-primary'>Doc</span><span className='text-secondary'>mic.</span>
                </h1>
                <h2 className='mt-3'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</h2>
                <div className='flex justify-center gap-5 my-6'>
                    <button className='btn btn-circle bg-white hover:bg-secondary'>
                        <Link to='/'><img src={facebook} alt="facebook" /></Link>
                    </button>
                    <button className='btn btn-circle bg-white hover:bg-secondary'>
                        <Link to='/'><img src={instagram} alt="instagram" /></Link>
                    </button>
                    <button className='btn btn-circle bg-white hover:bg-secondary'>
                        <Link to='/'><img src={google} alt="google" /></Link>
                    </button>
                    <button className='btn btn-circle bg-white hover:bg-secondary'>
                        <Link to='/'><img src={twitter} alt="twitter" /></Link>
                    </button>
                    <button className='btn btn-circle bg-white hover:bg-secondary'>
                        <Link to='/'><img src={youtube} alt="youtube" /></Link>
                    </button>
                </div>
                <h1>Copyright @2022 Medicom All Rights Reserved</h1>
            </div>

            <div>
                <h1 className='text-xl text-secondary font-semibold'>
                    Quick Links
                </h1>
                <div className='grid grid-cols-2 gap-y-3 mt-3'>
                    <h1 className='link link-hover'>About Us</h1>
                    <h1 className='link link-hover'>Services</h1>
                    <h1 className='link link-hover'>Our Pricing</h1>
                    <h1 className='link link-hover'>Our Doctors</h1>
                    <h1 className='link link-hover'>Our Gallery</h1>
                    <h1 className='link link-hover'>Our Latest News</h1>
                    <h1 className='link link-hover'>Appointment</h1>
                    <h1 className='link link-hover'>Careers</h1>
                    <h1 className='link link-hover'>Privacy Policy</h1>
                    <h1 className='link link-hover'>Contact Us</h1>
                </div>
            </div>

            <div>
                <h1 className='text-xl text-secondary font-semibold'>
                    Opening Hours
                </h1>
                <div className='grid grid-cols-2 gap-y-3 mt-3'>
                    <h1 className='text-primary'>Mon - Tue</h1>
                    <h1>08:00 AM - 05:00 PM</h1>
                    <h1 className='text-primary'>Wed - Thu</h1>
                    <h1>09:00 AM - 06:00 PM</h1>
                    <h1 className='text-primary'>Fri - Sat</h1>
                    <h1>10:00 AM - 07:00 PM</h1>
                    <h1 className='text-primary'>Sunday</h1>
                    <h1>Emergency Only</h1>
                    <h1 className='text-primary'>Personal</h1>
                    <h1>Mon - 05:00 PM</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;