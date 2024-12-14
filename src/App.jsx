import { useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import './App.css'
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import Home from "./component/home/landing";
import Login from "./component/form/login";
import Register from "./component/form/register";
import Landlord from "./component/home/landlord";
import Product from "./component/product/product";
import Details from "./component/productDetails/productDetails";
import Wishlist from "./component/wishlist/wishlist";
import Cart from "./component/cart/cart";

// import SideNav from "./component/sideNavBar";
function App() {
  const [isloaded, setIsLoaded] = useState(false);
  // const [mode, setMode] = useState(false);
  // const modee = () => {
  //   setMode(!mode);
  //   false
  //     ? (document.body.style.backgroundColor = "white")
  //     : (document.body.style.backgroundColor = "black");
  // };
  // modee(mode);
  const [toggle, setToggle] = useState(false);
  // onload(setToggle(toggle));
  // const [toggleOff, setToggleOff] = useState(true);
  // const load = () => {
  //   setToggle(!toggle);
  //   console.log(toggle, "loaded");
  // };
  const toggleSidebar = () => {
    setToggle(!toggle);
    console.log("hi");
  };
  // load(toggle);
  // const params = useParams();
  // console.log(window.location.href);
  // window.location.href != "http://localhost:5173/" ? setToggle(false) : se;
  function Layout() {
    return (
      <>
        <Header
          onToggle={toggleSidebar}
          toggle={toggle}
          // modee={modee}
          // mode={mode}
        />
        <Outlet />
        <Footer />
      </>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Product toggle={toggle} />} />
          <Route path="/landing" element={<Home toggle={toggle} />} />
          <Route path="/productDetails/:id" element={<Details />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
