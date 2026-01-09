import { Link } from 'react-router-dom'

export default function Colors() {
  const colorGroups = [
    {
      category: 'Mode Clair',
      colors: [
        { name: 'light-text', value: '#090707' },
        { name: 'light-background', value: '#f8f6f6' },
        { name: 'light-primary', value: '#879d7b' },
        { name: 'light-secondary', value: '#92795d' },
        { name: 'light-accent', value: '#325848' },
        { name: 'light-error', value: '#d16666' },
        { name: 'light-success', value: '#68a67d' },
        { name: 'light-warning', value: '#e6b469' },
        { name: 'light-info', value: '#6a9fb5' },
        { name: 'light-muted', value: '#8a8a8a' },
      ]
    },
    {
      category: 'Mode Sombre',
      colors: [
        { name: 'dark-text', value: '#f8f6f6' },
        { name: 'dark-background', value: '#090707' },
        { name: 'dark-primary', value: '#6e8462' },
        { name: 'dark-secondary', value: '#a2896d' },
        { name: 'dark-accent', value: '#a7cdbd' },
        { name: 'dark-error', value: '#e88a8a' },
        { name: 'dark-success', value: '#7bc896' },
        { name: 'dark-warning', value: '#f0c97d' },
        { name: 'dark-info', value: '#7dbdd8' },
        { name: 'dark-muted', value: '#a0a0a0' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center text-light-primary dark:text-dark-primary">
          Palette de Couleurs
        </h1>
        <p className="text-center text-light-muted dark:text-dark-muted mb-12">
          Système de couleurs global de l'application
        </p>

        <div className="space-y-12">
          {colorGroups.map((group) => (
            <div key={group.category}>
              <h2 className="text-3xl font-bold mb-6 text-light-primary dark:text-dark-primary">
                {group.category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {group.colors.map((color) => (
                  <div key={color.name} className="text-center">
                    <div
                      className="w-full h-32 rounded-lg mb-3 shadow-lg border border-light-muted dark:border-dark-muted flex items-center justify-center font-bold text-sm"
                      style={{ backgroundColor: color.value }}
                    />
                    <p className="font-semibold text-light-text dark:text-dark-text">{color.name}</p>
                    <p className="text-xs text-light-muted dark:text-dark-muted">{color.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-lg font-bold text-light-background dark:text-dark-background bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary transition"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
