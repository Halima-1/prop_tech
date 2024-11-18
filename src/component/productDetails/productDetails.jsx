import { useNavigate, useParams } from "react-router-dom";
import apartments from "../apartments.js";
import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import "./productDetails.scss";
import ListingForm from "./listingForm.jsx";
import { HiLocationMarker } from "react-icons/hi";
import { landlordNames } from "../apartments.js";
const Details = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const params = useParams();
  const id = params.id;
  console.log(apartments.filter((item, index) => item.id == id));

  const displayProduct = apartments.filter((item, index) => {
    return item.id == id;
  });

  console.log(displayProduct);

  // To filter products and for item that match the route

  const image = displayProduct[0].images;
  console.log(image);
  const landlord = landlordNames[id];

  // const relatedProduct =product.filter(product => product.category == details[0].category)
  return (
    <>
      <section className="details">
        <div className="details-container">
          {displayProduct && (
            <>
              <p className="location">
                <HiLocationMarker />
                {displayProduct[0].location}
              </p>
              <div className="full-image image">
                {/* <BiHeart className="wish" /> */}
                <img
                  src={`${image[displayValue]}`}
                  alt={displayProduct[0].typeOfApartment}
                />
              </div>
              <div className="other-images">
                {displayProduct[0].images.map((item, index) => (
                  <div key={index}>
                    <img
                      src={`${item}`}
                      alt={displayProduct[0].typeOfApartment}
                      onClick={() => setDisplayValue(index)}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="overview">
          <h4>
            {landlord} residence in {displayProduct[0].location} state
          </h4>
          <div>
            <p>State: {displayProduct[0].state}</p>
            <p>Country:Nigeria</p>
            <p>Descrption: {displayProduct[0].typeOfApartment}</p>
            <p>Price: #{displayProduct[0].price} per annum</p>
            <p>Property ID: {displayProduct[0].id}</p>
          </div>
        </div>
      </section>
      <ListingForm id={id} />
    </>
  );
};

export default Details;
