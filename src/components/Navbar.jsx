import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white px-8 py-5 flex justify-between items-center relative">
      <h1 className="text-xl tracking-wide font-semibold">
        <Link to="/" className="text-inherit no-underline">
          Morpho
        </Link>
      </h1>
      <nav className="hidden md:flex space-x-5 font-medium">
        <Link className="hover:underline" to="/">Accueil</Link>
        <Link className="hover:underline" to="/products">Produits</Link>
        <Link className="hover:underline" to="/devenir-imprimeur">Imprimeur ?</Link>
        <Link className="hover:underline" to="/contact">Contact</Link>
      </nav>
      <MobileMenu />
    </header>
  );
}

export default Navbar;
