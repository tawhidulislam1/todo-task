import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { HiOutlineSortAscending } from "react-icons/hi";


const Dashboard = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <div className='bg-[#9538E2] text-white text-center py-6'>
                <h2 className='text-3xl'>Dashboard</h2>
                <p> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex justify-center gap-2 my-2'>
                    <NavLink to='/dashbaord/cart' className='btn btn-outline px-10 border-white text-white rounded-xl'>Cart</NavLink>
                    <NavLink to='/dashbaord/favourite' className='btn btn-outline px-10 border-white text-white  rounded-xl'>
                        Favourite
                    </NavLink>
                </div>
            </div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;