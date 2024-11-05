import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';

const AllCard = () => {
    const data = useLoaderData();

    const { category } = useParams();
    console.log(category);
    const [allcard, setAllcard] = useState([]);
    useEffect(() => {
        if (category && category !== "All") {
            const filterByCategory = [...data].filter(
                allcard => allcard.category === category
            )
            setAllcard(filterByCategory)
            
        }
         else {
            setAllcard(data)
        } 
    }, [data, category])
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                allcard.map(all => <Card key={all.product_id} all={all}></Card>)
            }
        </div>
    );
};

export default AllCard;