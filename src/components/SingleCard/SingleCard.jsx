import React from 'react';
import { TiDelete } from "react-icons/ti";


const SingleCard = ({ favourite }) => {
    const { product_image, product_title, price, description } = favourite;
    return (
        <div>
            <div className="max-w-full bg-white shadow-md rounded-lg overflow-hidden relative flex my-3 items-center">

                <img className="w-1/6 object-cover" src={product_image} alt="Card Image" />
                <div className="w-5/6 p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{product_title}</h3>
                    <p className="text-gray-600 mt-2">
                        {description}
                    </p>
                    <p className="text-gray-700 font-bold mt-2">
                        Price: ${price}
                    </p>
                </div>
                <button className="absolute top-4 right-4 text-4xl text-gray-500 hover:text-red-500 transition-colors duration-200">
                    <TiDelete />

                </button>
            </div>
        </div>
    );
};

export default SingleCard;