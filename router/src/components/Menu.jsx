import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Menu;