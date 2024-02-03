import ContactItem from './ContactItem';

export default function ContactList({ contacts, onDeleteContact, onUpdateContact }) {
    return (
        <div>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} onUpdateContact={onUpdateContact} />
            ))}
        </div>
    );
}
