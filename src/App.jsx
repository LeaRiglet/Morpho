import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DevenirImprimeur from './pages/DevenirImprimeur'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router basename="/Morpho">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/devenir-imprimeur" element={<DevenirImprimeur />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tos" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
