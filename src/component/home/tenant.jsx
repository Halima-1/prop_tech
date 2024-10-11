import { useNavigate } from "react-router-dom";
import "./landing.scss";

function Tenant() {
  const navigate = useNavigate()
  const handleGetStartedBtn =() =>{
    navigate("/register", {replace:true})
}
  return (
    <>
      <section className="container">
        <h1>Find a home you will love to live</h1>
        <p>
          Rent from owners or match with an agent. <br />
          From searching to signing, you can do it all online with easee
        </p>
        <button onClick={handleGetStartedBtn}>Get started</button>
      </section>
      <section className="features">
        <h1>Features</h1>
        <div className="features-container">
          <div>
            <img
              src="https://media.istockphoto.com/id/1488438637/photo/row-of-homes.jpg?s=612x612&w=0&k=20&c=kVsYFuVKHD8FOb9jxPgC134M8Q8yJ61cmsSRtqJPkIM="
              alt=" a storey building"
            />
          </div>
          <div>
            <h1>All your rental needs in one place</h1>
            <p>
              Mybrela heelps you to easily aapply for rent, pay rent and sign a
              lease agreement and comunicate with your landlord, all from your
              comfort zone!{" "}
            </p>
          </div>
        </div>
        <div className="features-container reverse">
          <div>
            <h1>Save 60% of the agency fee.</h1>
            <p>
              Change the way you get your rental apartment by renting from the
              platform to save 60% of the agency fee and 100% of the inspection,
              registration and illegal fees.{" "}
            </p>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1319763433/photo/multiethnic-couple-handshake-with-consultant-at-home.jpg?s=612x612&w=0&k=20&c=uW5-DzuIB5mrQNxN_j_fd6QjVAmtdbeTZf7geXPlRsA="
              alt=""
            />
          </div>
        </div>
        <div className="features-container">
          <div>
            <img
              src="https://media.istockphoto.com/id/1393885905/photo/real-estate-agent-showing-a-mature-couple-a-new-house.jpg?s=612x612&w=0&k=20&c=uSziAtn73HvrWJxE8UR1HZlLkfjfvruhvgxZOPFDDzM="
              alt=""
            />
          </div>
          <div>
            <h1>Get connected</h1>
            <p>
              Contact an agent who has already done the legwork and has your
              dream houses available. Let put you in a safe hands, be matched
              with verified agent who are professional in real estate business.
            </p>
          </div>
        </div>
        <div className="features-container reverse">
        <div>
            <h1>Rent smart and fast</h1>
            <p>
              Search thousands of apartment and schedule a visit with our
              intuitive search and booking system. When you{" "}
            </p>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1402139820/photo/unrecognizable-person-looks-for-home-using-mobile-app.jpg?s=612x612&w=0&k=20&c=6KM8ZEonr7AeULyjU8n0A6oBRqxhO0lgAX9DyAl7M08="
              alt=""
            />
          </div>
         
        </div>
      </section>
    </>
  );
}

export default Tenant;
