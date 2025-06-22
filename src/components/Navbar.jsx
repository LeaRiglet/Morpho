import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h1>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Morpho
        </Link>
      </h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/products">Produits</Link>
        <Link to="/devenir-imprimeur">Imprimeur ?</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/tos">TOS</Link>
      </nav>
    </header>
  );
}

export default Navbar;
