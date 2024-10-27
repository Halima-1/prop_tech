import { IoCallSharp } from "react-icons/io5";
import "./footer.scss";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer>
        <div>
          <h2>mybrela</h2>
          <p>
            <b>Contact us</b>
          </p>

          <div>
            <a href="tel:+2348105154901">
              <IoCallSharp className="footer-icon" />
            </a>
            <a href="mailto:dahunsiolajumoke18@gmail.come">
              <MdEmail className="footer-icon" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="footer-icon" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <BsTwitterX className="footer-icon" />
            </a>
          </div>
        </div>
        <div>
          <p>
            <b>FOR TENANTS</b>
          </p>
          <a href=".././form/register.jsx">Sign up</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Download android app
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Download IOS app
          </a>
        </div>
        <div>
          <p>
            <b>FOR LANDLORD</b>
          </p>
          <a href=".././form/register.jsx">Sign up</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Download android app
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Download IOS app
          </a>
        </div>{" "}
        <div>
          <p>
            <b>FOR AGENT</b>
          </p>
          <a href=".././form/register.jsx">Sign up</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Download android app
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Download IOS app
          </a>
        </div>{" "}
        <div>
          <p>
            <b>RESOURCES</b>
          </p>
          <p>Affliates</p>
          <p>Partners</p>
          <p>Privacy policy</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
