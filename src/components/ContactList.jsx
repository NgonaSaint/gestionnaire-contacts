import ContactItem from './ContactItem'

function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div>
      <h2>Liste des contacts</h2>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default ContactList