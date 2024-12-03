import React from 'react';
import logo from '../assets/logo1.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addCoffee'}>Add Coffee</NavLink></li>
        <li><NavLink to={'/users'}>Users</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Sign Up</NavLink></li>
        

    </>
    return (
        <div style={{
            backgroundImage: `url('../src/assets/navbg.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }} className="navbar bg-base-100 z-50 fixed ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white font-rancho md:hidden ">Espresso Emporium</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className='flex justify-center items-center gap-3'>
                    <img className='w-10 h-10 ' src={logo} alt="" />
                    <h1 className='text-white font-rancho text-2xl lg:text-3xl font-semibold'>Espresso Emporium </h1>
                </div>

            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal hidden md:flex px-1 *:text-white gap-3 lg:mr-5">
                    {links}

                </ul>
                {/* <a className="btn ">Button</a> */}
            </div>
        </div>
    );
};

export default Navbar;