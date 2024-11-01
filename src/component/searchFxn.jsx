import { useNavigate } from "react-router-dom";
// import SideNav from "./sideNavBar";
import apartments from "./apartments";
import "./product.scss";
import React from "react";
import { useState, useEffect } from "react";
import { BiHeart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineTypeSpecimen } from "react-icons/md";
const SearchFxn = () => {
  const route = useNavigate();
  const [searchErr, setSearchErr] = useState({});

  const [searchInput, setSearchInput] = useState({
    type: "",
    price: "",
    location: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput({ ...searchInput, [e.target.name]: value });
  };
  const newErr = {};
  const handleValidation = () => {
    let searchResult = "";
    // FILTERING FOR LOCATION, TYPE, AND PRICE
    if (
      searchInput.location !== "" &&
      searchInput.type !== "" &&
      searchInput.price !== ""
    ) {
      searchResult = apartments.filter(
        (item) =>
          item.type === searchInput.type.toLowerCase() &&
          item.state.toLowerCase() === searchInput.location.toLowerCase() &&
          item.price >= searchInput.price / 1.3 &&
          item.price <= searchInput.price
      );
      localStorage.setItem("searchResult", JSON.stringify(searchResult));
    }
    // FILTERING FOR LOCATION, AND TYPE
    else if (searchInput.location !== "" && searchInput.type !== "") {
      searchResult = apartments.filter(
        (item) =>
          item.type === searchInput.type.toLowerCase() &&
          item.state.toLowerCase() === searchInput.location.toLowerCase()
      );
      localStorage.setItem("searchResult", JSON.stringify(searchResult));
    }
    // FILTERING FOR TYPE AND PRICE
    else if (searchInput.type !== "" && searchInput.price !== "") {
      searchResult = apartments.filter(
        (item) =>
          item.type === searchInput.type.toLowerCase() &&
          item.price >= searchInput.price / 1.3 &&
          item.price <= searchInput.price
      );
      localStorage.setItem("searchResult", JSON.stringify(searchResult));
    }
    // FILTERING FOR LOCATION AND PRICE
    else if (searchInput.location !== "" && searchInput.price !== "") {
      searchResult = apartments.filter(
        (item) =>
          item.location === searchInput.location.toLowerCase() &&
          item.price >= searchInput.price / 1.3 &&
          item.price <= searchInput.price
      );
      localStorage.setItem("searchResult", JSON.stringify(searchResult));
    }
    // FILTERING FOR PRICE ONLY
    else if (searchInput.price) {
      searchResult = apartments.filter(
        (item) =>
          item.price >= searchInput.price / 1.3 &&
          item.price <= searchInput.price
      );
      localStorage.setItem("searchResult", JSON.stringify(searchResult));
    }
    // FILTERING FOR TYPE ONLY
    else if (searchInput.type) {
      searchResult = apartments.filter(
        (item) => item.type == searchInput.type.toLowerCase()
      );
      localStorage.setItem("searchResult", JSON.stringify(searchResult));
    }
    // FILTERING FOR LOCATION ONLY
    else if (searchInput.location) {
      searchResult = apartments.filter(
        (item) => item.state.toLowerCase() == searchInput.location.toLowerCase()
      );
      localStorage.setItem("searchResult", JSON.stringify(searchResult));
    } else {
      searchResult = "";
    }
    // searchResult = apartments.filter(
    //   (item) =>
    //     item.type == searchInput.type.toLowerCase() ||
    //     item.price == searchInput.price ||
    //     item.state.toLocaleLowerCase() == searchInput.location.toLowerCase()
    // );
    console.log(searchResult);
    localStorage.setItem("searchResult", JSON.stringify(searchResult));
  };
  const handleSubmit = () => {
    handleValidation();
    // if (!errData) {
    //   return;
    // }
  };
  let searchResultt = "";
  searchResultt = localStorage.getItem("searchResult")
    ? JSON.parse(localStorage.getItem("searchResult"))
    : [];
  handleValidation();
  // implement search functionalities
  const search = () => {};
  return (
    <>
      <form
        className="searchContainer"
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <p>Looking for </p>
          <div>
            <CiLocationOn className="inputIcon" />
            <input
              onChange={handleChange}
              value={searchInput.location}
              name="location"
              type="text"
              id="location"
              placeholder="type preferred location"
            />
          </div>
        </div>
        <div>
          <p>Price range</p>
          <div>
            {/* <label htmlFor="location">Price range:</label> */}
            <GiPriceTag className="inputIcon" />
            <input
              onChange={handleChange}
              value={searchInput.price}
              name="price"
              type="text"
              id="price"
              placeholder="e.g 100 - 500,000"
            />
          </div>
        </div>{" "}
        <div>
          <p>Type </p>
          <div>
            <MdOutlineTypeSpecimen className="inputIcon" />
            <input
              onChange={handleChange}
              value={searchInput.type}
              name="type"
              type="text"
              id="type"
              placeholder="e.g Self contain"
            />
          </div>
        </div>
        <button className="searchBtn" type="submit">
          <BsSearch />
        </button>
      </form>
      {searchResultt && <p>Result: {searchResultt.length} apartments</p>}

      <div className="productsContainer">
        {searchResultt
          ? searchResultt.map((result) => (
              <div
                onMouseEnter={() => {
                  const productIcon = document.getElementById(
                    `product-icons${result.id}`
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
                    `product-icons${result.id}`
                  );
                  productIcon.classList.remove("showProductIcons");
                  productIcon.classList.add("hideProductIcons");
                }}
                key={result.id}
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
                    route(`/productDetails/${result.id}`);
                  }}
                  className="productElement hideProductIcons"
                  id={`product-icons${result.id}`}
                >
                  View details
                </p>
                <BiHeart
                  className="wish"
                  onClick={() => handleAddToWishlist(product)}
                />
                <div>
                  <img src={result.images[0]} alt="" />
                </div>
                <div className="productDetails">
                  <p>{result.typeOfApartment}</p>
                  <p>{result.location.slice(0, 50) + "..."}</p>
                  <span>#{result.price}</span>
                  <span></span>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default SearchFxn;
