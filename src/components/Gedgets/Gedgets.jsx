import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './gadget.css'

const Gedgets = ({ categories }) => {
    return (
        <div className="relative mt-52 text-center">
            <h2 className="text-center text-4xl font-bold">Explore Cutting-Edge Gadgets</h2>
            <div className="flex justify-center mt-8 gap-2">
                <div className="w-2/6 lg:w-1/6">
                    <div className='bg-white text-white p-6 rounded'>
                        {categories.categories.map((category, ibx) => (
                            <div >
                                <NavLink key={ibx} className='bg-gray-200 block py-1 px-3 rounded-lg text-gray-800 mt-2'
                                     to={`/category/${category.name}`}> {category.name}</NavLink>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="w-4/6 lg:w-5/6">
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
    );
};

export default Gedgets;