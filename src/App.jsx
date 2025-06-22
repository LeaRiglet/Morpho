import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import DevenirImprimeur from './pages/DevenirImprimeur'
import './App.css'

function App() {
  return (
    <Router basename="/Morpho">
      <header>
        <h1>Morpho</h1>
        <nav>
          <Link to="/">Accueil</Link>
          <a href="/#produits">Produits</a>
          <Link to="/devenir-imprimeur">Imprimeur ?</Link>
          <a href="#">Contact</a>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devenir-imprimeur" element={<DevenirImprimeur />} />
      </Routes>
    </Router>
  )
}

export default App
