import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DevenirImprimeur from './pages/DevenirImprimeur'
import Products from './pages/Products'
import Contact from './pages/Contact'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router basename="/Morpho">
      <Navbar />
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
