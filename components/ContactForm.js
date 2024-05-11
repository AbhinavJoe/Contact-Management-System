import { useState } from 'react';

export default function ContactForm({ onAddContact }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddContact({ name, phone, email });
        setName('');
        setPhone('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8 border-2 p-10">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 pl-2 border block w-full h-8 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />{/*shadow-xl*/}
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 pl-2 border block w-half h-8 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 pl-2 border block w-full h-8 rounded-md border-gray-300 shadow focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
            </div>
            <button type="submit" className="mt-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Contact</button>
        </form>
    );
}
