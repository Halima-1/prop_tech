import { useNavigate } from "react-router-dom";
import "./landing.scss";

function Agent() {
  const navigate = useNavigate();
  const handleGetStartedBtn = () => {
    navigate("/register", { replace: true });
  };
  return (
    <>
      <section className="containerr">
        <h1>the best decision for your real estate business.</h1>
        <p>
          Attract more properties owner with seamless access to the right tools
          to grow your rental business. <br />
          Connect with the landlord searching for you on mybrela!
        </p>
        <button onClick={handleGetStartedBtn}>Get started</button>
      </section>
      <section className="features">
        <h1>Features</h1>
        <div className="features-container">
          <div>
            <img
              src="https://media.istockphoto.com/id/1217903477/photo/3d-illustration-of-small-apartments-in-pastel-colors-interor-design-living-room-and-hall-in.jpg?s=612x612&w=0&k=20&c=4sDNlG5ONPncU8G59JsJS5oM4f0KKsLWzIsJMeFfD2o="
              alt=""
            />
          </div>
          <div>
            <h1>Everything your clients need all in one location</h1>
            <p>
              Manage the entire tenancy process in one place. Get access to the
              right technology to stay ahead in the real estate business.
            </p>
          </div>
        </div>
        <div className="features-container reverse">
          <div>
            <h1>Post your listing and fill vacant properties fast</h1>
            <p>
              Reach, convert and retain more tenants with intelligent marketing
              and automated leasing tools. <br />
              Gain access to tools that allows you to find applicants for vacant
              properties quickly.
            </p>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1410231807/photo/office-building-exterior-at-windhoek-at-khomas-region-namibia.jpg?s=612x612&w=0&k=20&c=nD_GYehJ9TC-RdSW2pLfFWvnodu4VfbkXAv3YdgCJ6c="
              alt=""
            />
          </div>
        </div>
        <div className="features-container">
          <div>
            <img
              src="https://media.istockphoto.com/id/1130700102/photo/asian-architect-business-people-group-discussion-on-meeting-with-construction-blueprints-plan.jpg?s=612x612&w=0&k=20&c=MW2u2GhPPM2GBnsEOIrsjBAmFToSJNmooWlKib_9Q94="
              alt=""
            />
          </div>
          <div>
            <h1>Secure and easily access your client portfolio</h1>
            <p>
              Make faster, more informed decisions with an integrated system
              that allows you to manage all your client's details
            </p>
          </div>
        </div>
        <div className="features-container reverse">
          <div>
            <h1>Free yourself from the office </h1>
            <p>
              With our cloud based solutions, you can access any important
              information and run your business from your comfort zone at any
              time.
            </p>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1485101411/photo/black-man-airport-and-business-call-with-a-smile-ready-for-plane-travel-and-global-work.jpg?s=612x612&w=0&k=20&c=SSpXDq085ltZhvTKX9jCFkj5pmlnxQfL-njaHPM2DM8="
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Agent;
