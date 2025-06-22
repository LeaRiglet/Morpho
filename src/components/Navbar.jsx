import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-200 text-gray-800 px-8 py-5 flex justify-between items-center shadow-neumorphism">
      <h1 className="text-xl tracking-wide font-semibold">
        <Link to="/" className="text-inherit no-underline">
          Morpho
        </Link>
      </h1>
      <nav className="flex space-x-5 font-medium">
        <Link className="hover:text-indigo-600" to="/">Accueil</Link>
        <Link className="hover:text-indigo-600" to="/products">Produits</Link>
        <Link className="hover:text-indigo-600" to="/devenir-imprimeur">Imprimeur ?</Link>
        <Link className="hover:text-indigo-600" to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
