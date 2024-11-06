import { toast  } from 'react-toastify';

// get add to cart
const getAllAddToCart = () => {
  const all = localStorage.getItem("Add-To-Cart");
  if (all) {
    const allCart = JSON.parse(all);
    return allCart;
  } else {
    return [];
  }
};

//add addtocart in localstorage
const AddToCart = (product) => {
  const addtocart = getAllAddToCart();
  const isExist = addtocart.find(
    (products) => products.product_id === product.product_id
  );
  if (isExist) {
    return toast.error("This Is Already In The Card");
  }
  addtocart.push(product);
  localStorage.setItem("Add-To-Cart", JSON.stringify(addtocart));
  toast.success("Add To The Cart SuccessFully")
};

// get Favourate
const GetAllFavourite = () => {
  const all = localStorage.getItem("favourite");
  if (all) {
    const allCart = JSON.parse(all);
    return allCart;
  } else {
    return [];
  }
};
//add Favourate in localstorage
const addToFavourite = (product) => {
  const favourite = GetAllFavourite();
  const isExist = favourite.find(
    (products) => products.product_id === product.product_id
  );
  if (isExist) {
    return toast.error("ALready Add To Cart Done");
  }
  favourite.push(product);
  localStorage.setItem("favourite", JSON.stringify(favourite));
  toast.success("Add To The Favourite SuccessFully")
};


// remove form localStorage
const removeFavourite = id =>{
    const favourite = GetAllFavourite();
    const rimining = favourite.filter(product=> product.product_id != id)
    localStorage.setItem("favourite", JSON.stringify(rimining));
    return toast.error("remove Successful");
}
const removeAddToCart = id =>{
    const Cart = getAllAddToCart();
    const rimining = Cart.filter(product=> product.product_id != id)
    localStorage.setItem("Add-To-Cart", JSON.stringify(rimining));
    return toast.error("remove Successful");

}

const removeAllProduct = () =>{
  const Cart = getAllAddToCart();
  Cart = localStorage.removeItem("Add-To-Cart");

}
export { AddToCart,addToFavourite, getAllAddToCart , removeFavourite , removeAllProduct , removeAddToCart, GetAllFavourite };
