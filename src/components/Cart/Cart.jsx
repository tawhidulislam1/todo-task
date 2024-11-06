import React, { useEffect, useState } from 'react';
import { getAllAddToCart, removeAddToCart, removeAllProduct } from '../utility';
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

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const findPrice = carts.map(product => product.price)
        const totalPrice = findPrice.reduce((sum, price) => sum + price, 0)
        setTotalPrice(totalPrice);
    }, [carts])

    const handlePurchase = () => {
        removeAllProduct();
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
                            <h3 className='text-xl font-bold'>Total Price : ${totalPrice}</h3>
                            <button onClick={() => handleSort('price')} className="btn btn-outline btn-primary">
                                Sort by Price <HiOutlineSortAscending />
                            </button>
                            <a onClick={() => handlePurchase()} className="btn btn-primary" href="#modal">Purchase</a>
                        </div>
                    </div>
                )}


            </div>

            <div>
                {
                    carts.map((favourite, idx) => <SingleCard key={idx} handleRemove={handleRemove} favourite={favourite}></SingleCard>)
                }
            </div>

            {/* Put this part before </body> tag */}
            <div className="modal" role="dialog" id="modal">
                <div className="modal-box text-center">
                    <img src="https://png.pngtree.com/png-vector/20220830/ourmid/pngtree-successfully-png-image_6130187.png" alt="" className='w-1/3 mx-auto' />
                    <h3 className="text-lg font-bold">Payment Successfully!</h3>
                    <p className="py-4">Thanks for purchasing.</p>
                    <h3 className='text-lg font-bold'>Total purchasing : ${totalPrice}</h3>
                    <div className="modal-action">
                        <a href="/" className="btn">Close!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;