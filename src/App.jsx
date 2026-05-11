import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {
  const [contacts, setContacts] = useState([])
  const [editingContact, setEditingContact] = useState(null)

  const handleSubmit = (formData) => {
    if (editingContact) {
      setContacts(contacts.map(c =>
        c.id === editingContact.id ? { ...formData, id: c.id } : c
      ))
      setEditingContact(null)
    } else {
      setContacts([...contacts, { ...formData, id: Date.now() }])
    }
  }

  const handleDelete = (id) => {
    setContacts(contacts.filter(c => c.id !== id))
  }

  return (
    <div>
      <h1>Gestionnaire de Contacts</h1>
      <ContactForm
        onSubmit={handleSubmit}
        editingContact={editingContact}
        onCancel={() => setEditingContact(null)}
      />
      <ContactList
        contacts={contacts}
        onEdit={setEditingContact}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App