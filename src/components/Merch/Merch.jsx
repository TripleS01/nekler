import { Link } from "react-router-dom";

import Path from "../../paths";

export default function Merch() {
    return (
        <>
            <section className="merch-section">
                <div className="message-merch">
                    <h2>If you want to support what we are doing, here are some of the ways!</h2>
                </div>
                <div className="merch-container">

                    <div className="merch-card">
                        <img src="/static/IMG_5929.jpg" alt="nekler" />


                        <Link to={Path.Clothes} className="button-merch">Clothes</Link>
                    </div>

                    <div className="merch-card">
                        <img src="/static/IMG_1931.jpg" alt="nekler" />

                        <Link to={Path.Stickers} className="button-merch">Stickers</Link>
                    </div>

                </div>
                <div className="message-order">
                    <h1>For orders contact us on
                        <a href="https://www.instagram.com/neklerofficial_"> instagram</a> or <a href="tel:0988947809">call us</a>.</h1>
                </div>

            </section >
        </>
    );
}

<section section-merch>
    <div className="message">
        <h2>If you want to support what we are doing, here are some of the ways!</h2>
    </div>
    <div className="image-container-merch">
        <div className="image-wrapper-merch">
            <img src="/static/IMG_5929.jpg" alt="nekler" />
            <Link to={Path.Clothes} className="button button-mobile">Clothes</Link>
        </div>
        <div className="image-wrapper-merch">
            <img src="/static/IMG_1931.jpg" alt="nekler" />
            <Link to={Path.Stickers} className="button button-mobile">Stickers</Link>
        </div>
    </div>
    <div className="message-order">
        <h1>For orders contact us on
            <a href="https://www.instagram.com/neklerofficial_"> instagram</a> or <a href="tel:0988947809">call us</a>.</h1>
    </div>
</section>
