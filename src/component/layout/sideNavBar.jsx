import "../product/product.scss";
// import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
function SideNav({ loading, toggle }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
    localStorage.setItem("validatn", JSON.stringify({ isLoggin: false }));
  };

  return (
    <>
      <aside>
        <ul onLoad={loading}>
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
            <NavLink
              className={"nav-item"}
              to={"/product"}
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Product
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
              to={"/wishlist"}
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Wishlist
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
