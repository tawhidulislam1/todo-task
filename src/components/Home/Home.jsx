import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Gedgets from '../Gedgets/Gedgets';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';

const Home = () => {
    const  categories = useLoaderData();
    return (

        <div className='max-w-screen-xl mx-auto '>
           <Hero></Hero>
           <Gedgets categories={categories}></Gedgets>

        </div>
    );
};

export default Home;