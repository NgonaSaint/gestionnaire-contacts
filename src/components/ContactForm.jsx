import { useState } from 'react'

function ContactForm({ onSubmit, editingContact, onCancel }) {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: ''
  })
  const [erreurEmail, setErreurEmail] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (e.target.name === 'email') {
      setErreurEmail('')
    }
  }

  const emailEstValide = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.prenom || !form.nom || !form.email) {
      alert('Veuillez remplir tous les champs obligatoires !')
      return
    }

    if (!emailEstValide(form.email)) {
      setErreurEmail('❌ Email invalide (ex: jean@email.com)')
      return
    }

    onSubmit(form)
    setForm({ prenom: '', nom: '', email: '', telephone: '' })
    setErreurEmail('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="prenom"
        value={form.prenom}
        onChange={handleChange}
        placeholder="Prénom *"
      />
      <input
        name="nom"
        value={form.nom}
        onChange={handleChange}
        placeholder="Nom *"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email *"
      />
      {erreurEmail && (
        <p style={{ color: 'red', fontSize: '13px' }}>{erreurEmail}</p>
      )}
      <input
        name="telephone"
        value={form.telephone}
        onChange={handleChange}
        placeholder="Téléphone"
      />
      <button type="submit">
        {editingContact ? 'Modifier' : 'Ajouter'}
      </button>
      {editingContact && (
        <button type="button" onClick={onCancel}>
          Annuler
        </button>
      )}
    </form>
  )
}

export default ContactForm