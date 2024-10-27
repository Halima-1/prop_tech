import "./product.scss";
// import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCart2, BsHeart } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { PiHamburgerLight } from "react-icons/pi";
import { useState } from "react";
function SideNav({ toggle }) {
  const navigate = useNavigate();
  //   const [toggle, setToggle] = useState();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
    localStorage.setItem("validatn", JSON.stringify({ isLoggin: false }));
  };

  //   function toggleSidebar() {
  //     const sideNavBar = document.getElementById("sideNavBar");

  //     console.log(sideNavBar);
  //     if (sideNavBar.classList.contains("hide")) {
  //       sideNavBar.classList.remove("hide");
  //       sideNavBar.classList.add("show");
  //     } else {
  //       sideNavBar.classList.remove("show");
  //       sideNavBar.classList.add("hide");
  //     }
  //   }
  return (
    <>
      {/* // side navbar */}
      <aside>
        {/* <h1>aside</h1> */}
        <div className="side-search-bar">
          <div>
            <p>Looking for: </p>
            {/* <CiLocationOn className="inputIcon" /> */}
            <input
              type="text"
              id="locationnn"
              placeholder="type preferred location"
            />
          </div>
          <div>
            <p>Price range:</p>
            {/* <GiPriceTag className="inputIcon" /> */}
            <input type="text" id="pricee" placeholder="e.g 100 - 500,000" />
          </div>{" "}
          <div>
            <p>Type: </p>
            {/* <MdOutlineTypeSpecimen className="inputIcon" /> */}
            <input type="text" id="typee" placeholder="e.g Self contain" />
          </div>
        </div>
        {/* <BsSearch className="searchBtn" /> */}
        {/* side navbar */}
        <ul>
          <li>
            <NavLink
              className={"nav-item"}
              to={"/"}
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <select name="categories" id="cati" className={"nav-item"}>
              <option value="null">Category</option>

              <option value="landlord">Landlord</option>
              <option value="client">Tenant</option>
              <option value="agent">Estate agent</option>
            </select>
          </li>
          <li>
            <NavLink
              className={"nav-item"}
              to={"/product"}
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Manage Rentals
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"nav-item"}
              to={"/login"}
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"nav-item"}
              to={"/register"}
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default SideNav;
