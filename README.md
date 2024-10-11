# Wildlife Ledger: Dynamic Animal & Category Management App

### What is Wildlife Ledger?

Wildlife Ledger is a dynamic web application for managing animal listings and categories. It enables users to add new categories, upload animal details with images, and filter animals by category. The app is built with Next.js and integrates a backend API using Node.js, Express, and MongoDB, with file uploads handled by Cloudinary.

### Features

1. Built with Next.js, Tailwind CSS, Axios, Express, MongoDB
2. Dynamic category management and animal listing
3. File uploads handled by Cloudinary for animal images
4. Filtering functionality for animals by category
5. Reusable form components for easy data entry

### Tools

- [Next.js](https://nextjs.org/): A React framework for server-rendered applications.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [Express.js](https://expressjs.com/): A minimal Node.js web application framework.
- [MongoDB](https://www.mongodb.com/): A NoSQL database for flexible data management.
- [Cloudinary](https://cloudinary.com/): A cloud-based image and video management service.

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

create a .env file in the server root with your connection strings

`MONGO_URI=your-mongo-connection-string`

`CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name`

`CLOUDINARY_API_KEY=your_cloudinary_api_key`

`CLOUDINARY_API_SECRET=your_cloudinary_api_secret`

In the client root, create a .env file with the example variable

`NEXT_PUBLIC_BASE_URL=http://localhost:8000`

Start the Frontend & Backend development server

```bash
npm run dev
```

## Links

- [Front-End Repository ](https://github.com/masudranashawon/wildlife-ledger-client)
- [Back-End Repository ](https://github.com/masudranashawon/wildlife-ledger-server)

## Thank you for checking out WildLife Ledger!
