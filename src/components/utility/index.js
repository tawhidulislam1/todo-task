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
    return alert("ALready Add To Cart Done");
  }
  addtocart.push(product);
  localStorage.setItem("Add-To-Cart", JSON.stringify(addtocart));
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
    return alert("ALready Add To Cart Done");
  }
  favourite.push(product);
  localStorage.setItem("favourite", JSON.stringify(favourite));
};

export { AddToCart,addToFavourite, getAllAddToCart , GetAllFavourite };
