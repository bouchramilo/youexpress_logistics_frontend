import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className={darkMode ? 'dark' : ''}>
      <nav className="bg-light-background dark:bg-dark-background border-b-2 border-light-primary dark:border-dark-primary">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-light-primary dark:text-dark-primary hover:text-light-secondary dark:hover:text-dark-secondary transition">
            MyApp
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition font-medium">Accueil</Link>
            <Link to="/about" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition font-medium">À propos</Link>
            <Link to="/contact" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition font-medium">Contact</Link>
            <Link to="/colors" className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition font-medium">Couleurs</Link>
            <button onClick={toggleDarkMode} className="px-4 py-2 rounded-lg bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary text-light-background dark:text-dark-background font-bold transition">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="px-3 py-2 rounded text-xl text-light-text dark:text-dark-text">
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="px-3 py-2 text-2xl text-light-text dark:text-dark-text">
              ☰
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-light-background dark:bg-dark-background border-t-2 border-light-primary dark:border-dark-primary px-4 py-4 space-y-2">
            <Link to="/" className="block px-4 py-2 rounded text-light-text dark:text-dark-text hover:bg-light-primary hover:text-light-background dark:hover:bg-dark-primary dark:hover:text-dark-background transition font-medium">Accueil</Link>
            <Link to="/about" className="block px-4 py-2 rounded text-light-text dark:text-dark-text hover:bg-light-primary hover:text-light-background dark:hover:bg-dark-primary dark:hover:text-dark-background transition font-medium">À propos</Link>
            <Link to="/contact" className="block px-4 py-2 rounded text-light-text dark:text-dark-text hover:bg-light-primary hover:text-light-background dark:hover:bg-dark-primary dark:hover:text-dark-background transition font-medium">Contact</Link>
            <Link to="/colors" className="block px-4 py-2 rounded text-light-text dark:text-dark-text hover:bg-light-primary hover:text-light-background dark:hover:bg-dark-primary dark:hover:text-dark-background transition font-medium">Couleurs</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
