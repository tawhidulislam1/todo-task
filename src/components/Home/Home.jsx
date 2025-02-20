import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Gedgets from '../Gedgets/Gedgets';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const categories = useLoaderData();
    return (

        <div className='max-w-screen-xl mx-auto '>
            <Helmet>
                <title>Gadget Havean || Home</title>
            </Helmet>
            <Hero></Hero>
         

        </div>
    );
};

export default Home;