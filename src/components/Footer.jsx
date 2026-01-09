export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-light-background dark:bg-dark-background border-t-2 border-light-primary dark:border-dark-primary mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <p className="mb-2 text-light-text dark:text-dark-text">
          © {year} MyApp. Tous droits réservés.
        </p>
        <p className="text-sm text-light-muted dark:text-dark-muted">
          Construit avec React, Vite et Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
