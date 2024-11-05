import React from 'react';

const Card = ({all}) => {
    const { product_title ,product_id ,product_image ,price } = all || {};
    return (
        <div>
            <div className="card bg-base-100 w-90 shadow-xl">
                <figure className='bg-blue-400 py-6 rounded-2xl'>
                    <img
                        src={product_image}
                        alt="Shoes" className='h-[166px]'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}!</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;