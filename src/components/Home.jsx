import React, { useState } from 'react';
// import bgHome from '../assets/1.png'

import CoffeeCard from './CoffeeCard';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)

    return (
        <div style={{
            backgroundImage: `url('../src/assets/Home.png')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }} className="bg-base-100 py-16 px-8 ">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-xl font-light text-[#331A15] mb-6">
                    --- Sip & Savor ---
                </h2>
                <h3 className="text-center text-4xl font-extrabold text-[#331A15] mb-12 font-rancho ">
                    Our Popular Products
                </h3>
                <div className="text-center mb-8">

                    <Link to={'/addCoffee'}><button className='btn btn-accent  text-black hover:bg-[#b59672]'>Add coffee</button></Link>

                    <p className='text-center my-6 text-xl font-thin '>Available Coffees: {coffees.length}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    {coffees.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)}
                </div>
            </div>
        </div>
    );
};

export default Home;