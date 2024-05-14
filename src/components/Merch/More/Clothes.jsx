export default function Clothes() {
    return (
        <>
            <section className="section-merch-more">
                <div className="shop-card-container">

                    <div className='shop-card-merch'>
                        <div className="title-merch">
                            Nekler T-Shirt
                        </div>
                        <div className="description-merch">
                            Unisex
                        </div>
                        <div className="product-merch">
                            <img src="/static/IMG_1011.jpg" />
                        </div>
                        <div className='cta-merch'>
                            <div className="colors-merch">PURPLE/SKY BLUE/BLACK</div>
                            <div className="size-merch">XS/S/M/L/XL</div>
                        </div>
                        <div className="price-merch">40 LV</div>
                    </div>
                    <div className='shop-card-merch'>
                        <div className="title-merch">
                            Nekler Hoodie
                        </div>
                        <div className="description-merch">
                            Unisex
                        </div>
                        <div className="product-merch">
                            <img src="/static/IMG_26362.jpeg" />
                        </div>
                        <div className='cta-merch'>
                            <div className="colors-merch">DARK BLUE/BLACK</div>
                            <div className="size-merch">XS/S/M/L/XL</div>

                        </div>
                        <div className="price-merch">70 LV</div>
                    </div>
                </div>
                <div className="message-order-clothes">
                    <h1>For orders contact us on
                        <a href="https://www.instagram.com/neklerofficial_"> instagram</a> or <a href="tel:0988947809">call us</a>.</h1>
                </div>
                <div className="message-comming-soon">
                    <h2>More comming soon...</h2>
                </div>
            </section >
        </>
    );
}