const DropdownMenu = ({ toggle }) => {
    return (
        <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
            <Link to="/" onClick={toggle}>Home</Link>
            <Link to="/services" onClick={toggle}>Services</Link>
            <Link to="/merch" onClick={toggle}>Merch</Link>
            <Link to="/our-team" onClick={toggle}>Our Team</Link>
        </div>
    );
};

export default DropdownMenu;
