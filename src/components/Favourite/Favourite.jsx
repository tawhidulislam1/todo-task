import React, { useEffect, useState } from 'react';
import { GetAllFavourite, removeFavourite } from '../utility';
import { useLoaderData, useLocation } from 'react-router-dom';
import SingleCard from '../SingleCard/SingleCard';
import { HiOutlineSortAscending } from "react-icons/hi";
import { toast } from 'react-toastify';

const Favourite = () => {
    const [favourites, setFavourite] = useState([]);
    const allFavourite = useLoaderData();
    useEffect(() => {
        const storefavourite = GetAllFavourite();
        const allStoreFavourite = storefavourite.map(id => `${id.product_id}`);
        const favouriteList = allFavourite.filter(product => allStoreFavourite.includes(product.product_id))
        setFavourite(favouriteList);
    }, [])
    const handleRemove = (id) => {
        removeFavourite(id);
        const storefavourite = GetAllFavourite();
        const allStoreFavourite = storefavourite.map(id => `${id.product_id}`);
        const favouriteList = allFavourite.filter(product => allStoreFavourite.includes(product.product_id))
        setFavourite(favouriteList);
    }
    const { pathname } = useLocation();
   
    return (
        <div>
            <div>

                {pathname === '/dashbaord/favourite' ? (
                    <div className='flex justify-between py-10 px-10'>
                        <h2 className="font-bold text-2xl">Favourite</h2>
                    </div>
                ) : (
                    <div className='flex justify-between  py-10 px-10'>
                        <h2 className="font-bold text-2xl">Cart</h2>
                        <div className="flex items-center gap-2">

                            <button className="btn btn-outline btn-primary">
                                Sort by Price <HiOutlineSortAscending />
                            </button>
                            <button className="btn btn-primary">Purchase</button>
                        </div>
                    </div>
                )}


            </div>
            <div>
                {
                    favourites.map((favourite, idx) => <SingleCard key={idx} handleRemove={handleRemove} favourite={favourite}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Favourite;