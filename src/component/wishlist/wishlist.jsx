import "./wishlist.scss";
// import "../cacart.css"
import { Link, useNavigate } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
// import { product } from "../../assets/productImages";

const Wishlist = () => {
  const user = JSON.parse(localStorage.getItem("user")) || [];
  const wishList = user[0].wishList;
  console.log(wishList);
  const totalWishListItem = wishList.length;
  const route = useNavigate();
  return (
    <>
      <main>
        <div className="container">
          <div className="item">
            <b>Wish List</b>
            <p id="itemLength">
              You have {totalWishListItem} item(s) in your wishlist
            </p>
          </div>
          <div id="cartContainer">
            {!wishList || wishList.length == 0 ? (
              <div className="empty-cart">
                {/* <img
                    style={{ width: 150, height: 150 }}
                    src="src/assets/images/empty cart.jpg"
                    alt="empty cart"
                  /> */}
                <h2>your wishList is empty</h2>
                <p>
                  Go back to <Link to="/product">Shop</Link>{" "}
                </p>
              </div>
            ) : (
              <>
                <div id="productDetails">
                  {wishList.map((item) => (
                    <div id="aboutItem" key={item.gallery[2]}>
                      <div
                        className="product"
                        onClick={() => {
                          route(`/productDetails/${item.id}`);
                        }}
                      >
                        <img src={item.gallery[2]} alt="" />
                      </div>
                      <div className="about">
                        <div className="desc"></div>
                        <p>
                          price per item: ${item.rooms[0].price_per_night}
                          ,000
                        </p>
                        {/* <p className="colour">colour:{item.color[0]}</p> */}
                        <span className="list">Add note</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Wishlist;
