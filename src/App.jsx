import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import './App.css'
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import Home from "./component/home/landing";
import Login from "./component/form/login";
import Register from "./component/form/register";
import Landlord from "./component/home/landlord";
import Product from "./component/product";
import Details from "./component/productDetails/productDetails";
import Wishlist from "./component/wishlist/wishlist";
import SideNav from "./component/sideNavBar";
function App() {
  const [toggle, setToggle] = useState(false);
  // const [toggleOff, setToggleOff] = useState(true);

  const toggleSidebar = () => {
    setToggle(!toggle);
    console.log("hi");
  };
  function Layout() {
    return (
      <>
        <Header onToggle={toggleSidebar} toggle={toggle} />
        <Outlet />
        <Footer />
      </>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home toggle={toggle} />} />
          <Route path="/product" element={<Product toggle={toggle} />} />
          <Route path="/productDetails/:id" element={<Details />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
