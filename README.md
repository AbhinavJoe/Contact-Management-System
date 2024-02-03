# Contact Management System

## Description

The Contact Management System is a web application developed using Next.js and Tailwind CSS. It allows users to store, view, manage, and delete contact information, including names, phone numbers, and email addresses. This project is designed as a practical solution for managing personal or professional contacts with ease and efficiency. It features a simple, user-friendly interface and utilizes either in-memory storage or file-based storage for persistent data management.

## Project Structure

The project consists of several key files and directories:

- `pages/_app.js`: The main entry point for Next.js applications. It includes global styles and any additional app-level configurations.
- `pages/index.js`: The homepage that displays the contact list and options to interact with contacts (add, edit, delete).
- `components/ContactForm.js`: A component for adding new contacts and editing existing ones.
- `components/ContactList.js`: A component that renders the list of contacts.
- `components/ContactItem.js`: A component used within `ContactList` to display individual contact details.
- `styles/globals.css`: Global styles for the application, including Tailwind CSS configurations.

## Prerequisites

Ensure you have the following installed before proceeding with the installation:

- Node.js (LTS version recommended)
- npm (comes with Node.js) or Yarn

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/Contact-Management-System.git

   ```

2. Navigate to the project directory:

   ```bash
   cd Contact-Management-System
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or if you're using Yarn:

   ```bash
   yarn
   ```

## Running the Application

To start the development server, run:

```bash
npm run dev
```

or if you're using Yarn:

```bash
yarn dev
```

Open http://localhost:3000 in your browser to view the application.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.
