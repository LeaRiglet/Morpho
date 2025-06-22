import { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden relative">
      <button
        aria-label="Menu"
        onClick={toggle}
        className="focus:outline-none"
      >
        {open ? (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
      {open && (
        <nav className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-gray-900 text-white flex flex-col py-2 space-y-2">
          <Link onClick={close} className="px-4 py-1 hover:underline" to="/">Accueil</Link>
          <Link onClick={close} className="px-4 py-1 hover:underline" to="/products">Produits</Link>
          <Link onClick={close} className="px-4 py-1 hover:underline" to="/devenir-imprimeur">Imprimeur ?</Link>
          <Link onClick={close} className="px-4 py-1 hover:underline" to="/contact">Contact</Link>
        </nav>
      )}
    </div>
  );
}

export default MobileMenu;
