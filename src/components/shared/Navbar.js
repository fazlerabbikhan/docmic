import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

const Navbar = () => {

    const menuItems = <>
        <li><CustomLink to='/'>Home</CustomLink></li>
        <li><CustomLink to='/about'>About</CustomLink></li>
        <li><CustomLink to='/departments'>Departments</CustomLink></li>
        <li><CustomLink to='/pages'>Pages</CustomLink></li>
        <li><CustomLink to='/blogs'>Blog</CustomLink></li>
        <li><CustomLink to='/contacts'>Contacts</CustomLink></li>
    </>

    return (
        <div>
            <div className="navbar sticky">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><span className='text-primary'>Doc</span><span className='text-secondary'>mic.</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <button className="navbar-end">
                    <Link className="btn btn-primary" to='/'>Free Consulation</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;