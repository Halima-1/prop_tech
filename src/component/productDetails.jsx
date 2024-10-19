import { useNavigate, useParams } from "react-router-dom";
// import { product } from "./product.jsx";
import { useEffect, useState } from "react";

const Details = () => {
  const [details, setDetails] = useState();
  const [displayValue, setDisplayValue] = useState(0);
  const params = useParams();
  const id = params.id;
  console.log(params);
  async function fetchProduct() {
    const response = await fetch("http://hotel-list.onrender.com");
    const product = await response.json();
    setDetails(
      product.filter((item, index) => {
        return item.id == id;
      })
    );

    console.log("checking");
  }

  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(details);

  // To filter products and for item that match the route
  // const details = product.filter((item, index) => {
  //   return item.id == id;
  // });

  // console.log(params.id);

  // console.log(details);
  const image = details[0].gallery;
  // console.log(image);
  const productt = details[0];

  // const relatedProduct =product.filter(product => product.category == details[0].category)
  return (
    <>
      <h1>Details page</h1>

      <div className="display-card">
        {details && (
          <>
            <div className="details-side">
              {details[0].gallery.map((item, index) => (
                <img
                  key={index}
                  src={`../${item}`}
                  alt=""
                  // style={{ width: 120, height: 120 }}
                  onClick={() => setDisplayValue(index)}
                />
              ))}
            </div>

            <div>
              <div className="full-image image">
                <BiHeart className="wish" />

                <img
                  // style={{ width: 120, height: 120, display: "block" }}
                  src={`../${image[displayValue]}`}
                  alt={details[0].description}
                />
                {/* <p>{details[0].color[displayValue]}</p> */}
              </div>
            </div>
            <div className="contain">
              {/* <b>{details[0].category}</b> */}
              {/* <p>{`${details[0].color[displayValue]}/${details[0].description}`}</p> */}
              <p>{`${details[0].rooms[0].price_per_night},000`}</p>
              <button
              //   onClick={() => {
              //     const cart = localStorage.getItem("cart")
              //       ? JSON.parse(localStorage.getItem("cart"))
              //       : [];
              //     console.log(image[displayValue]);
              //     const checkCart = cart.find(
              //       (item) => item.id === productt.id
              //     );
              //     console.log(checkCart);
              //     if (checkCart) {
              //       if (image[displayValue] == checkCart.images[0]) {
              //         checkCart.quantity = checkCart.quantity + 1;
              //         console.log(" item exist");
              //       } else {
              //         cart.unshift({
              //           ...productt,
              //           quantity: 1,
              //           availableQuantity: [
              //             productt.availableQuantity[displayValue],
              //           ],
              //           color: [productt.color[displayValue]],
              //           images: [image[displayValue]],
              //         });
              //       }
              //     } else {
              //       cart.unshift({
              //         ...productt,
              //         quantity: 1,
              //         availableQuantity: [
              //           productt.availableQuantity[displayValue],
              //         ],
              //         color: [productt.color[displayValue]],
              //         images: [image[displayValue]],
              //       });
              //       // setCart([...cart, product]);
              //       console.log("no existing item");
              //       console.log(checkCart);
              //     }
              //     localStorage.setItem("cart", JSON.stringify(cart));
              //     console.log(cart);
              //   }}
              >
                Add to cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Details;
