import { useState } from "react";
import { BiHeart, BiPlus, BiUserMinus } from "react-icons/bi";
import "./cart.css";
import { BsApple, BsArrowRightShort, BsTrash3 } from "react-icons/bs";
import apartments from "../apartments";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
console.log(apartments);

function Cart() {
  const route = useNavigate();

  const [errMessage, setErrMessage] = useState({});
  const navigate = useNavigate();
  const newErr = {};
  console.log(apartments);
  const cart = JSON.parse(localStorage.getItem("user-cart")) || [];
  function removeCart(id) {
    const index = cart.findIndex((item) => item.id == id);
    if (index == -1) {
      console.log("your cart is empty");
      console.log(index);
    } else {
      console.log("there is something in the cart");
      console.log(index);
      cart.splice(index, 1);
      window.location.href = "cart";
      // updateUser.cart = cart;
      localStorage.setItem("user-cart", JSON.stringify(cart));
      // localStorage.setItem("users", JSON.stringify(allUsers));
    }
  }

  const subTotal = cart.reduce((total, apartments) => {
    return total + apartments.price * apartments.quantity;
  }, 0);

  // total cart Item
  const totalCartItem = cart.reduce((totalItem, apartments) => {
    return totalItem + apartments.quantity;
  }, 0);
  console.log(subTotal);

  // check methods
  const deliver = () => {
    // localStorage.removeItem("pickUp");
    localStorage.setItem("check", true);
  };

  const pickUp = () => {
    localStorage.removeItem("check");
    localStorage.setItem("check", false);
  };

  const checkMtdValidatn = () => {
    const checkMessage = localStorage.getItem("check");

    console.log(checkMessage);
    console.log(cart);

    if (cart.length !== 0) {
      if (checkMessage) {
        navigate("/checkout");
      } else {
        newErr.checkErr = "select a check method";
        console.log(newErr);
      }
    } else {
      newErr.checkErr = "Your cart is empty!";
      console.log(newErr);
    }
    setErrMessage(newErr);
  };

  // to display cart item(s)
  return (
    <main>
      <div className="container">
        <div className="item">
          <p id="itemLength">
            {/* Hi{" "}
            <span style={{ color: "blue", textTransform: "capitalize" }}>
              {updateUser.username},
            </span>{" "} */}
            Your cart item is {totalCartItem}
          </p>
          <b>keep shopping</b>
        </div>
        <div id="cartContainer">
          {!cart || cart.length == 0 ? (
            <div className="empty-cart">
              <img
                style={{ width: 150, height: 150 }}
                src="https://img.freepik.com/free-vector/best-shop-supermarket-mall-cart-mobile-wheeled-shopping-trolley_39422-4.jpg?ga=GA1.1.74012937.1727346703&semt=ais_hybrid"
                alt="empty cart"
              />
              <h2>your cart is empty</h2>
              <p>
                Go back to our<Link to="/apartments"> Listing page</Link>{" "}
              </p>
            </div>
          ) : (
            <>
              <div id="apartmentsDetails">
                <p>
                  <b> Click on each apartment's image to view there details</b>
                </p>
                {cart.map((item) => (
                  <div id="aboutItem" key={item.images[0]}>
                    <div
                      className="apartments"
                      onClick={() => {
                        route(`../productDetails/${item.id}`);
                      }}
                    >
                      <img src={item.images[0]} alt="" />
                    </div>
                    <div className="about">
                      <div className="desc"></div>
                      <p>{item.typeOfApartment}</p>
                      <p>{item.location}</p>
                      <span>#{item.price}</span>
                      <div className="quantity">
                        <div className="length">
                          <div className="icon">
                            {/* <BiSolidLogIn /> */}
                            <BsTrash3
                              apartments={apartments}
                              onClick={() => removeCart(item.id)}
                            />
                            {/* <BiSolidLogInCircle /> <BiSolidLogOut /> */}
                          </div>
                        </div>
                        <span className="list">
                          {" "}
                          <BiHeart />
                        </span>
                        <span className="list">Add note</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="toCheckout">
            <div className="toGet">
              <p>
                <b>
                  {" "}
                  Will you like to schedule a visit to check the apartment
                  before payment?{" "}
                </b>
              </p>
              <div>
                <p id="check" onClick={() => deliver()}>
                  Yes
                </p>
                <p id="pickUp" onClick={() => pickUp()}>
                  No
                </p>
                {/* <span style={{color:"red"}}>{del</span> */}
                {/* <p>{checkMessage}</p> */}
              </div>
            </div>
            <div id="details">
              <p>
                <b>Order details</b>
                <p></p>
              </p>
              <div className="total">
                <p id="totalItem">Total item(s): {totalCartItem}</p>
                <p id="totalPrice">#{subTotal}</p>
              </div>
              {errMessage.checkErr && (
                <p
                  style={{
                    width: "65%",
                    color: "red",
                    fontSize: 15,
                    margin: "10 auto",
                  }}
                >
                  {errMessage.checkErr}
                </p>
              )}
              <button id="checkout" onClick={() => checkMtdValidatn()}>
                proceed to checkout
              </button>

              <div className="coupon">
                <div className="icon">
                  <BsApple />
                </div>
                <button>Apply coupon code</button>
                <BsArrowRightShort />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
