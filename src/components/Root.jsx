import React from 'react';
import Navbar from './Navbar';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

const Root = () => {
    const loadedCoffees = useLoaderData()

    return (
        <div className='flex flex-col min-h-screen'>
            <div className='h-[68px]'>

                <Navbar></Navbar>
            </div>
            <div className='flex-grow mb-7'>
                <Outlet></Outlet>
            </div>

           
            <Footer></Footer>

        </div>
    );
};

export default Root;