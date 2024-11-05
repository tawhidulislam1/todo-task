import React, { useEffect, useState } from 'react';
import { getAllAddToCart, removeAddToCart } from '../utility';
import { useLoaderData, useLocation } from 'react-router-dom';
import SingleCard from '../SingleCard/SingleCard';
import { HiOutlineSortAscending } from "react-icons/hi";

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
    const { pathname } = useLocation();
    const handleSort = sortBy => {
       
        const storeCart = getAllAddToCart();
        const allStoreCarts = storeCart.map(id => `${id.product_id}`);
        const cartList = allCarts.filter(product => allStoreCarts.includes(product.product_id))
        const sorted = cartList.sort((a, b) => b.price - a.price)
        setCarts(sorted);
    }
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
                        <button onClick={() => handleSort('price')} className="btn btn-outline btn-primary">
                                Sort by Price <HiOutlineSortAscending />
                            </button>
                            <button className="btn btn-primary">Purchase</button>
                        </div>
                    </div>
                )}


            </div>

            <div>
                {
                    carts.map((favourite, idx) => <SingleCard key={idx} handleRemove={handleRemove} favourite={favourite}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Cart;