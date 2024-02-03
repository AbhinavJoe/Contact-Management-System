import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

export default function Home() {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, { ...contact, id: Date.now() }]);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const updateContact = (updatedContact) => {
        setContacts(contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact));
    };

    return (
        <div className="container mx-auto p-4">
            <ContactForm onAddContact={addContact} />
            <ContactList contacts={contacts} onDeleteContact={deleteContact} onUpdateContact={updateContact} />
        </div>
    );
}
