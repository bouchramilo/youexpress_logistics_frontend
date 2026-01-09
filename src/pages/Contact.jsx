import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-light-primary dark:text-dark-primary mb-8 text-center">
          Nous Contacter
        </h1>

        {submitted && (
          <div className="mb-8 p-4 bg-light-success dark:bg-dark-success text-light-background dark:text-dark-background rounded-lg text-center font-bold">
            ✓ Merci ! Votre message a été envoyé.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-light-background dark:bg-dark-background border-2 border-light-primary dark:border-dark-primary rounded-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-bold mb-2 text-light-primary dark:text-dark-primary">
              Nom
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-light-muted dark:border-dark-muted bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-light-primary dark:text-dark-primary">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-light-muted dark:border-dark-muted bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-light-primary dark:text-dark-primary">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-2 rounded-lg border border-light-muted dark:border-dark-muted bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:border-light-primary dark:focus:border-dark-primary resize-none"
              placeholder="Votre message..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg font-bold text-light-background dark:text-dark-background bg-light-primary dark:bg-dark-primary hover:bg-light-secondary dark:hover:bg-dark-secondary transition transform hover:scale-105"
          >
            Envoyer
          </button>
        </form>

        <div className="mt-12 text-center">
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
