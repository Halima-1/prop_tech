import "./header.scss"
// import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCart2, BsHeart } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
    localStorage.setItem(
      "validatn",
      JSON.stringify({ isLoggin: false})
    );
  };
  
  return (
    <header>
      <nav>
        <h2 className="nav-brand">
          <span>mybrela</span>
        </h2>
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
            <select name="categories" id="cati" className={"nav-item"}
            >
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
      </nav>
    </header>
  );
}

export default Header;
