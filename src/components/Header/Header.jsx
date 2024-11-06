import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData, useLocation } from 'react-router-dom';
import Hero from '../Hero/Hero';
import { GiSelfLove } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { getAllAddToCart } from '../utility';
const Header = () => {
    const location = useLocation()

    const links =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/Statistics'}>Statistics</NavLink></li>
            <li><NavLink to={'/dashbaord'}>Dashbaord</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
        </>
 
    
    const navbarColor = location.pathname === '/' ? 'bg-[#9538E2] text-white' : 'bg-white text-gray-800';
    return (

        <div className={`${navbarColor}  max-w-screen-xl mt-4 rounded-t-lg mx-auto`}>
            <div className="navbar max-w-screen-xl mx-auto py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to={'/'}className="font-bold text-xl">Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end flex gap-1">
                    <Link to='dashbaord/cart' className="relative btn rounded-full text-lg border border-gray-300 p-3 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <FaCartPlus className="text-blue-600" />
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                           0
                        </div>
                    </Link>
                    <Link to='dashbaord/favourite' className="btn rounded-full text-xl border"><GiSelfLove /></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;