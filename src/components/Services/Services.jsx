import { Link } from "react-router-dom";
import Path from "../../paths";

export default function Services() {
    return (
        <>
            <section className="service-section">
                <div className="message">
                    <h3>The main services we offer:</h3>
                </div>
                <div className="service-container">

                    <div className="cardService">
                        <img src="/static/IMG_5880.jpg" alt="Paiting" />
                        <div className="cardService-content">
                            <h3 className="titleService">Painting</h3>
                            <Link to={Path.Painting} className="btnService">More</Link>
                        </div>
                    </div>

                    <div className="cardService">
                        <img src="/static/IMG_5888.jpg" alt="Polishing" />
                        <div className="cardService-content">
                            <h3 className="titleService">Polishing</h3>
                            <Link to={Path.Polishing} className="btnService">More</Link>
                        </div>
                    </div>

                    <div className="cardService">
                        <img src="/static/IMG_4474.jpg" alt="Polishing" />
                        <div className="cardService-content">
                            <h3 className="titleService">Polishing headlights</h3>
                            <Link to={Path.PolishingHeadlights} className="btnService">More</Link>
                        </div>
                    </div>

                    <div className="cardService">
                        <img src="/static/IMG_2949.jpg" alt="Engraving" />
                        <div className="cardService-content">
                            <h3 className="titleService">Engraving</h3>
                            <Link to={Path.Engraving} className="btnService">More</Link>
                        </div>
                    </div>

                    <div className="cardService">
                        <img src="/static/IMG_3686.jpg" alt="Reupholstery" />
                        <div className="cardService-content">
                            <h3 className="titleService">Reupholstery</h3>
                            <Link to={Path.Reupholstery} className="btnService">More</Link>
                        </div>
                    </div>

                </div>
                <div className="message-order">
                    <h1>For resertvation contact us on
                        <a href="https://www.instagram.com/neklerofficial_"> instagram</a> or <a href="tel:0988947809">call us</a>.</h1>
                </div>
                <div className="service-info">
                    <h2>Also we do repairs on vehicles not only detailing.
                        <br />The repairing depends on the vehicle.
                        <br />If we can&apos;t help you, WE CAN OFFER PARTS FOR ALL VEHICLES.
                    </h2>
                </div>

            </section >
        </>
    );
}