import "./product.scss";
import React from "react";
import { useState, useEffect } from "react";
import { BiHeart } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import SideNav from "../layout/sideNavBar";
import apartments from "../apartments";
import SearchFxn from "./searchFxn";
import Latest from "./latest";
import Promo from "./promo";
const Product = ({ toggle }) => {
  const route = useNavigate();
  console.log(apartments);

  // media query with javascript
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update state with current screen width
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Set up event listener on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  // TOGGLE SPECIAL LISTINGS AND ADD & REMOVE CLASSNAME
  const latest = apartments.filter((item) => item.id > apartments.length - 5);

  const [toggleLatestListing, setToggleLatestListing] = useState(false);
  const latestListing = () => {
    setToggleLatestListing(!toggleLatestListing);
    console.log(toggleListing);
    if (!toggleLatestListing) {
      document.getElementById("latest").style.backgroundImage = "none";
      document.getElementById("latest").classList.add("close");
      document.getElementById("latest").classList.remove("cover");
    } else {
      document.getElementById(
        "latest"
      ).style.backgroundImage = `url(${latest[0].images[0]})`;
      document.getElementById("latest").classList.remove("close");
      document.getElementById("latest").classList.add("cover");
    }
  };

  // discountListing
  const [toggleListing, setToggleListing] = useState(false);
  const promo = apartments.filter((item) => item.type == "flat");

  const discountListing = () => {
    setToggleListing(!toggleListing);
    console.log(toggleListing);
    if (!toggleListing) {
      document.getElementById("promo").style.backgroundImage = "none";
      document.getElementById("promo").classList.add("close");
      document.getElementById("promo").classList.remove("cover");
    } else {
      document.getElementById(
        "promo"
      ).style.backgroundImage = `url(${promo[0].images[0]})`;
      document.getElementById("promo").classList.remove("close");
      document.getElementById("promo").classList.add("cover");
    }
  };

  return (
    <>
      {/* <SideNav /> */}
      {toggle && <SideNav />}
      <SearchFxn screenWidth={screenWidth} />
      <div className="listing-container">
        <Latest
          toggleLatestListing={toggleLatestListing}
          screenWidth={screenWidth}
          latestListing={latestListing}
        />
        <Promo
          screenWidth={screenWidth}
          toggleListing={toggleListing}
          discountListing={discountListing}
        />
      </div>
      <h2>Available Apartments</h2>

      <section className="productsContainer">
        {apartments
          ? apartments.map((product, index) => (
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
                    route(`../productDetails/${product.id}`);
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
