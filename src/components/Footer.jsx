import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      © 2025 Morpho. Tous droits réservés. | Site par Morpho Design Studio |
<Link to="/tos" style={{ marginLeft: '0.25rem' }}>Conditions d'utilisation</Link>
    </footer>
  );
}

export default Footer;
