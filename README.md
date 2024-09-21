# Wildlife Ledger: Dynamic Animal & Category Management App

### What is Wildlife Ledger?

Wildlife Ledger is a dynamic web application for managing animal listings and categories. It enables users to add new categories, upload animal details with images, and filter animals by category. The app is built with Next.js and integrates a backend API using Node.js, Express, and MongoDB, with file uploads handled by Multer.

### Features

1. Built with Next.js, Tailwind CSS, Axios, Multer, Express, MongoDB
2. Dynamic category management and animal listing
3. File uploads handled with Multer for animal images
4. Filtering functionality for animals by category
5. Reusable form components for easy data entry

### Tools

- [Next.js](https://nextjs.org/): A React framework for server-rendered applications.
- [Multer](https://github.com/expressjs/multer): A middleware for handling `multipart/form-data`, primarily used for file uploads.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [Express.js](https://expressjs.com/): A minimal Node.js web application framework.
- [MongoDB](https://www.mongodb.com/): A NoSQL database for flexible data management.

## Installation

To set up and run the Wildlife Ledger app, follow these steps:

> **Note:** Ensure you have Node.js and MongoDB installed on your system!

Clone the `client` and `server` repositories:

```bash
git clone https://github.com/masudranashawon/wildlife-ledger-client.git
git clone https://github.com/masudranashawon/wildlife-ledger-server.git
```

Install the necessary packages for both the client and server

```bash
npm install or npm i
```

create a .env file in the server root with your MongoDB connection string

```bash
MONGO_URI=your-mongo-connection-string
```

In the client root, create a .env file with the example variable

`NEXT_PUBLIC_BASE_URL=http://localhost:3000`

Start the Frontend & Backend development server

```bash
npm run dev
```

## Links

- [Front-End Repository ](https://github.com/masudranashawon/wildlife-ledger-client)
- [Back-End Repository ](https://github.com/masudranashawon/wildlife-ledger-server)

## Thank you for checking out WildLife Ledger!
