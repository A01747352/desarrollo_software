import { Link } from "react-router";
// Link permite cargar contenido sin recargar toda la pagina
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
};

export default Menu;
