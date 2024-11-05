import React from 'react';

const Cart = () => {
    const [carts, setCarts] = useState([]);
    const allCarts = useLoaderData();
    useEffect(() => {
        const storefavourite = GetAllFavourite();
        const allStoreFavourite = storefavourite.map(id => `${id.product_id}`);
        const favouriteList = allFavourite.filter(product => allStoreFavourite.includes(product.product_id))
        setFavourite(favouriteList);
    }, [])
    return (

        <div>
            <h3>adflasjdflas</h3>
        </div>
    );
};

export default Cart;