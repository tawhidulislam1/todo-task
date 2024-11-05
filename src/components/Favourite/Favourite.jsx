import React, { useEffect, useState } from 'react';
import { GetAllFavourite, removeFavourite } from '../utility';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../SingleCard/SingleCard';

const Favourite = () => {
    const [favourites, setFavourite] = useState([]);
    const allFavourite = useLoaderData();
    useEffect(() => {
        const storefavourite = GetAllFavourite();
        const allStoreFavourite = storefavourite.map(id => `${id.product_id}`);
        const favouriteList = allFavourite.filter(product=> allStoreFavourite.includes(product.product_id))
        setFavourite(favouriteList);
    }, [])
    const handleRemove= (id) =>{
        removeFavourite(id);
        const storefavourite = GetAllFavourite();
        const allStoreFavourite = storefavourite.map(id => `${id.product_id}`);
        const favouriteList = allFavourite.filter(product=> allStoreFavourite.includes(product.product_id))
        setFavourite(favouriteList);
        alert('remove success fully')
    }
    return (
        <div>
            <div>
                {
                    favourites.map((favourite, idx) => <SingleCard key={idx} handleRemove={handleRemove} favourite={favourite}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Favourite;