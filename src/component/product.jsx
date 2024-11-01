import "./product.scss";
import React from "react";
import { useState, useEffect } from "react";
import { BiHeart } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import SideNav from "./sideNavBar";
import apartments from "./apartments";
import SearchFxn from "./searchFxn";

const Product = ({ toggle }) => {
  // const [product, setProduct] = useState();
  const route = useNavigate();
  console.log(apartments);

  // UPDATING USER'S DETAILS AND WISHLIST
  const user = JSON.parse(localStorage.getItem("user")) || [];
  const allUsers = JSON.parse(localStorage.getItem("users"));
  const updateUser = allUsers.find((item) => item.email == user[0].email);
  console.log(user);

  // ADDING ITEM TO WISHLIST
  const handleAddToWishlist = (product) => {
    const userWishList = localStorage.getItem("user-wishlist")
      ? JSON.parse(localStorage.getItem("user-wishlist"))
      : [];
    const checkWishList = userWishList.find((item) => item.id == product.id);
    console.log(userWishList);
    if (checkWishList) {
      console.log("item is already in the wishlist");
    } else {
      userWishList.unshift(product);
      console.log("one item added to wish list!");
    }
    console.log(userWishList);

    user[0].wishList = userWishList;
    console.log(user);

    updateUser.wishList = userWishList;
    localStorage.setItem("user-wishlist", JSON.stringify(userWishList));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(allUsers));
  };

  return (
    <>
      {/* <SideNav /> */}
      {toggle && <SideNav />}
      <SearchFxn />
      <section className="productsContainer">
        {apartments
          ? apartments.slice(0, 40).map((product, index) => (
              <div
                onMouseEnter={() => {
                  const productIcon = document.getElementById(
                    `product-icons${product.id}`
                  );
                  if (productIcon.classList.contains("hideProductIcons")) {
                    productIcon.classList.remove("hideProductIcons");
                    productIcon.classList.add("showProductIcons");
                  } else {
                    productIcon.classList.remove("showProductIcons");
                    productIcon.classList.add("hideProductIcons");
                  }
                }}
                onMouseLeave={() => {
                  const productIcon = document.getElementById(
                    `product-icons${product.id}`
                  );
                  productIcon.classList.remove("showProductIcons");
                  productIcon.classList.add("hideProductIcons");
                }}
                key={product.id}
                className="productsContainer_div"
              >
                {/* <BsEye
                  onClick={() => {
                    route(`/productDetails/${product.id}`);
                  }}
                  className="productElement hideProductIcons"
                  id={`product-icons${product.id}`}
                /> */}

                <p
                  onClick={() => {
                    route(`/productDetails/${product.id}`);
                  }}
                  className="productElement hideProductIcons"
                  id={`product-icons${product.id}`}
                >
                  View details
                </p>
                <BiHeart
                  className="wish"
                  onClick={() => handleAddToWishlist(product)}
                />
                <div>
                  <img src={product.images[0]} alt="" />
                </div>
                <div className="productDetails">
                  <p>{product.typeOfApartment}</p>
                  <p>{product.location.slice(0, 50) + "..."}</p>
                  <span>#{product.price}</span>
                  <span></span>
                </div>
              </div>
            ))
          : "loading3.."}
      </section>
    </>
  );
  // export {product}
};
export default Product;
