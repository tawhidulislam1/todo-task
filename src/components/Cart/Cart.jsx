import React, { useEffect, useState } from 'react';
import { getAllAddToCart, removeAddToCart } from '../utility';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../SingleCard/SingleCard';

const Cart = () => {
    const [carts, setCarts] = useState([]);
    const allCarts = useLoaderData();
    useEffect(() => {
        const storeCart = getAllAddToCart();
        const allStoreCarts = storeCart.map(id => `${id.product_id}`);
        const cartList = allCarts.filter(product => allStoreCarts.includes(product.product_id))
        setCarts(cartList);
    }, [allCarts, setCarts])

    const handleRemove = (id) => {
        removeAddToCart(id);
        const storeCart = getAllAddToCart();
        const allStoreCarts = storeCart.map(id => `${id.product_id}`);
        const cartList = allCarts.filter(product => allStoreCarts.includes(product.product_id))
        setCarts(cartList);
    }
    return (

        <div>
            
            <div>
                {
                    carts.map((favourite, idx) => <SingleCard key={idx} handleRemove={handleRemove} favourite={favourite}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Cart;