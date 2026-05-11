function ContactItem({ contact, onEdit, onDelete }) {
  return (
    <div>
      <p><strong>{contact.prenom} {contact.nom}</strong></p>
      <p>{contact.email}</p>
      <p>{contact.telephone}</p>
      <button onClick={() => onEdit(contact)}>✏️ Modifier</button>
      <button onClick={() => onDelete(contact.id)}>🗑️ Supprimer</button>
    </div>
  )
}

export default ContactItem