import { useNavigate } from "react-router-dom"
import "./landing.scss"

function Landlord(){

    const navigate = useNavigate()
    const handleGetStartedBtn =() =>{
      navigate("/register", {replace:true})
  }
    return(
        <>
        <section className="container">
            <h1>
                Find the best tenants and manage your properties with ease
            </h1>
            <p>Easy to use app for everything landlord needs to manage their properties with easy</p> 
            <button onClick={handleGetStartedBtn}>Get started</button>
        </section>
        <section className="features">
            <h1>Features</h1>
            <div className="features-container">
                <div>
                    <img src="https://media.istockphoto.com/id/1396856251/photo/colonial-house.jpg?s=612x612&w=0&k=20&c=_tGiix_HTQkJj2piTsilMuVef9v2nUwEkSC9Alo89BM=" alt="" />
                </div>
                <div>
                    <h1>Manage your properties from your comfort zone</h1>
                    <p>Mybrela makes it easier for you to find tenants, communicate and sign agreement with your tenants at your comfort zone. You can also delegate the management of your properties to a verified agent byfinding one on mybrela</p>
                </div>
            </div>
            <div className="features-container reverse">
                <div>
                    <h1>Post your vacant property and secure the best tenant</h1>
                    <p>By listing your properties on the web you can reach many tenants looking for a vacant apartment across the web</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1337712514/photo/man-checking-ads-of-houses-for-sale.jpg?s=612x612&w=0&k=20&c=vb8Z0iXWS-a6WICp8nhzbxL6b91Rbvi2xLidY7RVEiU=" alt="" />
                </div>
            </div>
            <div className="features-container">
                <div>
                    <img src="https://media.istockphoto.com/id/1331473755/photo/woman-monitoring-her-house-with-a-home-security-system.jpg?s=612x612&w=0&k=20&c=aui56CMBJ-i8Bj4jC9pVOqI1-f8Zp9bVv7KEOawWrec=" alt="" />
                </div>
                <div>
                    <h1>Get connected</h1>
                    <p>Contact an agent who has already done the legwork and has your dream houses available. Let put you in a safe hands, be matched with verified agent who are professional in real estate business.</p>
                </div>
            </div>
            <div className="features-container reverse">
            <div>
                    <h1>Rent smart and fast</h1>
                    <p>Search thousands of apartment and schedule a visit with our intuitive search and booking system. When you </p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1415886887/photo/freshly-painted-craftsman-bungalow-house.jpg?s=612x612&w=0&k=20&c=lcwiyJqjUoIM0FfRb3TwV2BzUY8RS7oT9zFmZGv4nLI=" alt="" />
                </div>
                
            </div>
        </section>
        </>
    )
}


export default Landlord;