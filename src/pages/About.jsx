import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-light-primary dark:text-dark-primary mb-8">
          À propos
        </h1>

        <div className="space-y-8">
          <section className="bg-light-background dark:bg-dark-background border-l-4 border-light-primary dark:border-dark-primary rounded-lg p-8">
            <h2 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-4">
              Notre Projet
            </h2>
            <p className="text-lg text-light-muted dark:text-dark-muted leading-relaxed">
              Cette application est construite avec les dernières technologies web modernes : React 19, Vite, Tailwind CSS et React Router.
            </p>
          </section>

          <section className="bg-light-background dark:bg-dark-background border-l-4 border-light-secondary dark:border-dark-secondary rounded-lg p-8">
            <h2 className="text-3xl font-bold text-light-secondary dark:text-dark-secondary mb-4">
              Technologies
            </h2>
            <ul className="space-y-3 text-light-muted dark:text-dark-muted">
              <li className="flex items-center gap-3">
                <span className="text-light-success dark:text-dark-success">✓</span>
                <span>React 19.2.0 - Bibliothèque JavaScript</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-light-success dark:text-dark-success">✓</span>
                <span>Vite - Build tool ultra-rapide</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-light-success dark:text-dark-success">✓</span>
                <span>Tailwind CSS 3.4.17 - Framework CSS</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-light-success dark:text-dark-success">✓</span>
                <span>React Router - Navigation SPA</span>
              </li>
            </ul>
          </section>

          <section className="bg-light-background dark:bg-dark-background border-l-4 border-light-accent dark:border-dark-accent rounded-lg p-8">
            <h2 className="text-3xl font-bold text-light-accent dark:text-dark-accent mb-4">
              Fonctionnalités
            </h2>
            <ul className="space-y-3 text-light-muted dark:text-dark-muted">
              <li>🎨 Système de couleurs global personnalisé</li>
              <li>🌓 Mode sombre et clair avec toggle</li>
              <li>📱 Design responsive et mobile-first</li>
              <li>⚡ Performance optimale avec Vite</li>
              <li>🛣️ Navigation fluide avec React Router</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-3 rounded-lg font-bold text-light-background dark:text-dark-background bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary transition"
          >
            Nous contacter →
          </Link>
        </div>
      </div>
    </div>
  )
}
