import { useState } from 'react'

function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
    setForm({ prenom: '', nom: '', email: '', telephone: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="prenom"
        value={form.prenom}
        onChange={handleChange}
        placeholder="Prénom"
      />
      <input
        name="nom"
        value={form.nom}
        onChange={handleChange}
        placeholder="Nom"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="telephone"
        value={form.telephone}
        onChange={handleChange}
        placeholder="Téléphone"
      />
      <button type="submit">Ajouter</button>
    </form>
  )
}

export default ContactForm