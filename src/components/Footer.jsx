import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-8 text-gray-600 text-sm mt-auto w-full shadow-inner-neumorphism">
      © 2025 Morpho. Tous droits réservés. | Site par Morpho Design Studio |
      <Link className="ml-1 underline" to="/tos">Conditions d'utilisation</Link>
    </footer>
  );
}

export default Footer;
