import React from 'react';
import { useParams } from 'react-router-dom';

const AllCard = () => {
    const { category } = useParams();
    console.log(category);
    return (
        <div>
            <h3>helloasdfassdafasdf......{category}</h3>
        </div>
    );
};

export default AllCard;