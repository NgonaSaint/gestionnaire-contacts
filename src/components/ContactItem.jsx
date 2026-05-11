function ContactItem({ contact, onEdit, onDelete }) {
  return (
    <div className="contact-item">
      <div className="contact-info">
        <p><strong>{contact.prenom} {contact.nom}</strong></p>
        <p>{contact.email}</p>
        <p>{contact.telephone}</p>
      </div>
      <div className="contact-actions">
        <button className="btn-edit" onClick={() => onEdit(contact)}>  Modifier</button>
        <button className="btn-delete" onClick={() => onDelete(contact.id)}> Supprimer</button>
      </div>
    </div>
  )
}

export default ContactItem