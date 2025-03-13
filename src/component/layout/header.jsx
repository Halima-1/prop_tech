import "./header.scss";
// import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCart2, BsHeart, BsMoonFill, BsStarFill } from "react-icons/bs";
import { BiLogOut, BiMenuAltRight } from "react-icons/bi";
import { PiHamburgerLight } from "react-icons/pi";
import { useState } from "react";
import { AiOutlineClose, AiOutlineCloseSquare } from "react-icons/ai";
function Header({ onToggle, toggle }) {
  const navigate = useNavigate();
  // const [toggle, setToggle] = useState();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
    localStorage.setItem("validatn", JSON.stringify({ isLoggin: false }));
  };

  return (
    <>
      <header>
        <nav>
          <h2 className="nav-brand">
            <span>mybrela</span>
          </h2>
          <ul>
            <li>
              <NavLink
                className={"nav-item"}
                to={"/landing"}
                style={({ isActive }) =>
                  isActive ? { color: "red" } : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"nav-item"}
                to={"/product"}
                style={({ isActive }) =>
                  isActive ? { color: "red" } : undefined
                }
              >
                Apartments
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"nav-item"}
                to={"/wishlist"}
                style={({ isActive }) =>
                  isActive ? { color: "red" } : undefined
                }
              >
                Wishlist
              </NavLink>
            </li>
            {/* <li>
              <select name="categories" id="cati" className={"nav-item"}>
                <option value="null">Category</option>

                <option value="landlord">Landlord</option>
                <option value="client">Tenant</option>
                <option value="agent">Estate agent</option>
              </select>
            </li> */}
            {/* <li>
              <NavLink
                className={"nav-item"}
                to={"/cart"}
                style={({ isActive }) =>
                  isActive ? { color: "red" } : undefined
                }
              >
                Cart
              </NavLink>
            </li> */}
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
          {/* {mode ? <p onClick={modee}>white</p> : <p onClick={modee}>black</p>} */}
          <div className="menuBtn" onClick={onToggle}>
            {!toggle ? <BiMenuAltRight /> : <AiOutlineClose />}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
