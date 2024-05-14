import { Link } from "react-router-dom";
import Path from "../../paths";


export default function Home() {
    return (
        <>
            <section className="home-section">
                <div className="message-home">
                    <h2 >Nekler&apos;s Detailing Garage: Where Precision Meets Excellence.</h2>
                    <p>Welcome to Nekler, where your car&apos;s transformation begins.
                        <br />With premium paints and expert techniques, we deliver stunning results every time.
                        <br />Trust us to bring your vision to life, leaving your vehicle sleek, stylish, and ready to hit the road.
                    </p>
                </div>
                <div className="home-container">

                    <div className="home-card">
                        <img src="../../../public/static/IMG_0928.jpg" alt="nekler" />

                        <Link to={Path.Merch} className="button-home">From us for you</Link>
                    </div>

                    <div className="home-card">
                        <img src="../../../public/static/IMG_0033.jpg" alt="nekler" />
                        <Link to={Path.Services} className="button-home">Services</Link>
                    </div>

                    <div className="home-card">
                        <img src="../../../public/static/IMG_4292.jpg" alt="nekler" />
                        <Link to={Path.OurTeam} className="button-home">Our Team</Link>
                    </div>
                </div>

            </section >
        </>
    );
}