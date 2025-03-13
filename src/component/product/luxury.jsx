import { AiOutlineClose } from "react-icons/ai";
import apartments from "../apartments";
import { BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Luxury = ({ screenWidth, toggleLuxuryListing, luxuryListing }) => {
  const route = useNavigate();
  const luxury = apartments.filter((item) => item.price >= 2000000);

  return (
    <section>
      {/* {screenWidth < 600 ? ( */}
      <div className="cover" id="luxury" onClick={luxuryListing}>
        {toggleLuxuryListing ? (
          <AiOutlineClose style={{ marginTop: 40, width: 40, height: 40 }} />
        ) : (
          <p>Luxury</p>
        )}
      </div>
      <div className="listing">
        {toggleLuxuryListing
          ? luxury.slice(0, 5).map((product) => (
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
                onClick={() => {
                  route(`/productDetails/${product.id}`);
                }}
              >
                {/* <p
                  
                  className="productElement hideProductIcons"
                  id={`product-icons${product.id}`}
                >
                  View details
                </p> */}
                {/* <BiHeart
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

export default Luxury;
