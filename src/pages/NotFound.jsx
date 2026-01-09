import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-light-error dark:text-dark-error mb-4">
          404
        </h1>
        <p className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-4">
          Page non trouvée
        </p>
        <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-lg font-bold text-light-background dark:text-dark-background bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary transition transform hover:scale-105"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
