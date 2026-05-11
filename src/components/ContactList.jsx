import { useState } from 'react'
import ContactItem from './ContactItem'

function ContactList({ contacts, onEdit, onDelete }) {
  const [search, setSearch] = useState('')
  const [sortAZ, setSortAZ] = useState(true)

  const filteredContacts = contacts
    .filter(contact =>
      contact.prenom.toLowerCase().includes(search.toLowerCase()) ||
      contact.nom.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortAZ) {
        return a.nom.localeCompare(b.nom)
      } else {
        return b.nom.localeCompare(a.nom)
      }
    })

  return (
    <div>
      <h2>Liste des contacts ({contacts.length})</h2>

      <input
        type="text"
        placeholder="Rechercher un contact..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <button onClick={() => setSortAZ(!sortAZ)}>
        Trier {sortAZ ? 'Z → A' : 'A → Z'}
      </button>

      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

      {filteredContacts.length === 0 && (
        <p>Aucun contact trouvé.</p>
      )}
    </div>
  )
}

export default ContactList