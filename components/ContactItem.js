export default function ContactItem({ contact, onDeleteContact, onUpdateContact }) {
    const handleDelete = () => {
        onDeleteContact(contact.id);
    };

    // This is a placeholder for an update functionality
    // In a real app, you would provide a form to edit the contact details
    const handleEdit = () => {
        // Implement the update logic here, possibly opening a modal or an inline form
    };

    return (
        <div className="flex items-center justify-between p-4 mb-4 bg-white shadow rounded-lg">
            <div>
                <p className="text-lg font-semibold">{contact.name}</p>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
            </div>
            <div className="flex items-center">
                <button onClick={handleEdit} className="mr-4 text-indigo-600 hover:text-indigo-900">Edit</button>
                <button onClick={handleDelete} className="text-red-600 hover:text-red-900">Delete</button>
            </div>
        </div>
    );
}
