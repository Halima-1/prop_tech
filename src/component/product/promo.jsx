import { useState } from "react";
import apartments from "../apartments";
import { BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Promo = ({ screenWidth, toggleListing, discountListing }) => {
  const route = useNavigate();
  const promo = apartments.filter((item) => item.type == "flat");

  return (
    <section>
      {/* {screenWidth < 600 ? ( */}
      <div className="cover" id="promo" onClick={discountListing}>
        {toggleListing ? (
          <AiOutlineClose style={{ marginTop: 40, width: 40, height: 40 }} />
        ) : (
          <p>10% discount</p>
        )}
      </div>
      <div className="listing">
        {toggleListing
          ? promo.slice(0, 5).map((product) => (
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
                className="productsContainer_div "
                onClick={() => {
                  route(`/productDetails/${product.id}`);
                }}
              >
                {/* <BsEye
            onClick={() => {
              route(`/productDetails/${product.id}`);
            }}
            className="productElement hideProductIcons"
            id={`product-icons${product.id}`}
          /> */}

                {/* <p
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
                /> */}
                <div>
                  <img src={product.images[0]} alt="" />
                </div>
                <div className="productDetails">
                  <p>{product.typeOfApartment}</p>
                  <p>{product.location.slice(0, 50) + "..."}</p>
                  {/* <span>#{product.price}</span> */}
                  <span></span>
                </div>
                {/* <button
                  className="add-to-cart"
                  onClick={() => onAddToCart(product)}
                >
                  Add to cart
                </button> */}
              </div>
            ))
          : null}
      </div>
    </section>
  );
};

export default Promo;
