import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
            <header className="header">
                <div className="header-left" >

                    <div className="logo">
                        <img src="./static/back.tshirt.svg" alt="Logo" />
                    </div>
                    <div className="site-name" >Nekler&apos;s Garage</div>
                </div>
                <div className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/merch">Merch</Link>
                    <Link to="/our-team">Our Team</Link>
                </div>
            </header>
        </>
    )
}

