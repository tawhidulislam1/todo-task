import React, { useState } from 'react';
import { GiSelfLove } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";


import { useLoaderData, useParams } from 'react-router-dom';
import { AddToCart, addToFavourite, GetAllFavourite } from '../utility';
const ProductDetail = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const productData = data.find(product => product.product_id === product_id);
    const { product_title, product_image, product_id: id, price, description, specification, rating } = productData;
    
    
    const handleAddToCart = (productData) => {
        AddToCart(productData);
    }
    const [isFavourite, setFavourite] = useState(false);
    const handlefavourite = (productData) => {
        addToFavourite(productData); setFavourite(true)
    }
    return (
        <div>
            <div className='bg-[#9538E2] text-white text-center py-6'>
                <h2 className='text-3xl'>Product Details</h2>
                <p> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className='w-3/4 mx-auto my-14'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure className='h-[500px] w-[400px] '>
                        <img
                            src={product_image}
                            alt="Movie" />
                    </figure>
                    <div className="card-body justify-center">
                        <h2 className="card-title font-bold text-2xl">{product_title}</h2>
                        <h6 className='font-bold text-lg text-gray-600'>Price:${price}</h6>
                        <h6>{description}</h6>
                        <div>
                            <h3 className='font-bold'>Specification</h3>
                            <ol className="list-decimal list-inside space-y-2 text-gray-800">
                                {
                                    specification.map((p, idx) => (
                                        <li className="text-gray-800" key={idx}>{p.key} : {p.value}</li>

                                    ))
                                }
                            </ol>
                        </div>
                        <div>
                            <h3>Rattings: </h3>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <h3 className="badge">{rating}</h3>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleAddToCart(productData)} className="btn text-lg">Add To Cert<FaCartPlus /></button>
                                <button onClick={() => handlefavourite(productData)} disabled={isFavourite} className="btn text-xl"><GiSelfLove /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;