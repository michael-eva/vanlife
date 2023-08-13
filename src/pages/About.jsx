import aboutImage from "../images/about-image.png"
import { Link } from "react-router-dom"
export default function About() {
    return (
        <div className="about-page">
            <img src={aboutImage} alt="" />
            <div className="about-container">
                <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)</p>

                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="explore-vans-container">
                    <h3>Your destination is waiting.</h3>
                    <h3>   Your van is ready.</h3>
                    <button className="link-button">Explore our vans</button>
                </div>
            </div>
        </div>
    )
}