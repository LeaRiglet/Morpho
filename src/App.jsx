import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import DevenirImprimeur from './pages/DevenirImprimeur'
import Products from './pages/Products'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router basename="/Morpho">
      <header>
        <h1>Morpho</h1>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/products">Produits</Link>
          <Link to="/devenir-imprimeur">Imprimeur ?</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/devenir-imprimeur" element={<DevenirImprimeur />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
