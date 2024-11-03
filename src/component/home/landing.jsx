import "./landing.css";
import Tenant from "./tenant";
import Agent from "./agent";
import Landlord from "./landlord";
import { useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import SideNav from "../sideNavBar";
function Home({ toggle }) {
  let [displayTenant, setDisplayTenant] = useState(true);
  let [displayAgent, setDisplayAgent] = useState(false);
  let [displayLandlord, setDisplayLandlord] = useState(false);
  const [category, SetCategory] = useState("Tenant");
  localStorage.setItem("category", category);
  // const category ="Tenant"
  //  const navigate =useNavigate()
  const handleTenantClick = () => {
    if (displayTenant) {
      let displayAgent = false;
      let displayLandlord = false;
      setDisplayAgent(displayAgent);
      setDisplayLandlord(displayLandlord);
      setDisplayTenant(displayTenant);
      console.log("display tenant");
      SetCategory("Tenant");
      //    const category ="Tenant"
      localStorage.setItem("category", category);
    } else {
      let displayTenant = true;
      let displayAgent = false;
      let displayLandlord = false;
      setDisplayAgent(displayAgent);
      setDisplayLandlord(displayLandlord);
      setDisplayTenant(displayTenant);
      SetCategory("Tenant");
      localStorage.setItem("category", category);
    }
  };

  const handleLandlordClick = () => {
    if (displayLandlord) {
      let displayAgent = false;
      let displayTenant = false;
      setDisplayAgent(displayAgent);
      setDisplayTenant(displayTenant);
      console.log("display landlord");
    } else {
      displayLandlord = true;
      let displayAgent = false;
      let displayTenant = false;
      setDisplayAgent(displayAgent);
      setDisplayTenant(displayTenant);
      setDisplayLandlord(displayLandlord);
      SetCategory("Landlord");
      localStorage.setItem("category", category);
    }
  };
  const handleAgentClick = () => {
    if (displayAgent) {
      let displayTenant = false;
      let displayLandlord = false;
      setDisplayAgent(displayAgent);
      setDisplayLandlord(displayLandlord);
      setDisplayTenant(displayTenant);

      console.log("display agent");
    } else {
      let displayAgent = true;
      let displayLandlord = false;
      let displayTenant = false;
      setDisplayAgent(displayAgent);
      setDisplayTenant(displayTenant);
      setDisplayLandlord(displayLandlord);
      SetCategory("Agent");
      localStorage.setItem("category", category);
    }
  };

  return (
    <>
      {toggle && <SideNav />}
      <section className="hero">
        <div className="hero_div">
          <button onClick={handleTenantClick}>Tenant</button>
          {/* {display && (<Tenant/>)} */}
          <button onClick={handleLandlordClick}>Landlord</button>
          <button onClick={handleAgentClick}>Agent</button>
        </div>
        {displayTenant ? <Tenant /> : null}
        {displayAgent ? <Agent /> : null}
        {displayLandlord ? <Landlord /> : null}
      </section>
    </>
  );
}

export default Home;
