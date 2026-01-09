import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Colors from './pages/Colors'
import NotFound from './pages/NotFound'
import Clients from './pages/Clients'
import Colis from './pages/Colis'
import Livreurs from './pages/Livreurs'
import Zones from './pages/Zones'
import Destinataires from './pages/Destinataires'
import Gestionnaires from './pages/Gestionnaires'
import Historique from './pages/Historique'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/colis" element={<Colis />} />
            <Route path="/livreurs" element={<Livreurs />} />
            <Route path="/zones" element={<Zones />} />
            <Route path="/destinataires" element={<Destinataires />} />
            <Route path="/gestionnaires" element={<Gestionnaires />} />
            <Route path="/historique" element={<Historique />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
