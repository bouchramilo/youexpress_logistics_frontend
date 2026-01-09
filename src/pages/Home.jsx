import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-light-primary dark:text-dark-primary mb-4">
            Bienvenue !
          </h1>
          <p className="text-xl text-light-muted dark:text-dark-muted mb-8">
            Une application React avec Tailwind CSS et React Router
          </p>
        </div>

        {/* Compteur */}
        <div className="bg-light-background dark:bg-dark-background border-2 border-light-primary dark:border-dark-primary rounded-2xl shadow-lg p-12 mb-16 text-center">
          <h2 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-6">
            Compteur
          </h2>
          <p className="text-7xl font-bold text-light-secondary dark:text-dark-secondary mb-8">
            {count}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 rounded-lg font-bold text-light-background dark:text-dark-background bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary transition transform hover:scale-105"
            >
              + Ajouter
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="px-6 py-3 rounded-lg font-bold text-light-background dark:text-dark-background bg-light-secondary dark:bg-dark-secondary hover:bg-light-primary dark:hover:bg-dark-primary transition transform hover:scale-105"
            >
              - Soustraire
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-6 py-3 rounded-lg font-bold text-light-background dark:text-dark-background bg-light-accent dark:bg-dark-accent hover:bg-light-secondary dark:hover:bg-dark-secondary transition transform hover:scale-105"
            >
              ↻ Réinitialiser
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-light-background dark:bg-dark-background border-l-4 border-light-success dark:border-dark-success rounded-lg shadow-md p-8">
            <div className="text-4xl mb-2">✓</div>
            <h3 className="font-bold text-2xl mb-2 text-light-primary dark:text-dark-primary">
              Succès
            </h3>
            <p className="text-light-muted dark:text-dark-muted">
              Tailwind CSS configuré avec mode sombre
            </p>
          </div>

          <div className="bg-light-background dark:bg-dark-background border-l-4 border-light-warning dark:border-dark-warning rounded-lg shadow-md p-8">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-bold text-2xl mb-2 text-light-primary dark:text-dark-primary">
              Rapide
            </h3>
            <p className="text-light-muted dark:text-dark-muted">
              Construit avec Vite pour une performance optimale
            </p>
          </div>

          <div className="bg-light-background dark:bg-dark-background border-l-4 border-light-info dark:border-dark-info rounded-lg shadow-md p-8">
            <div className="text-4xl mb-2">🛣️</div>
            <h3 className="font-bold text-2xl mb-2 text-light-primary dark:text-dark-primary">
              Navigateur
            </h3>
            <p className="text-light-muted dark:text-dark-muted">
              React Router intégré pour une navigation fluide
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/about"
            className="inline-block px-8 py-4 rounded-lg font-bold text-light-background dark:text-dark-background bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary transition transform hover:scale-105"
          >
            En savoir plus →
          </Link>
        </div>
      </div>
    </div>
  )
}
