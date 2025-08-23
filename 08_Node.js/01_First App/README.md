# First Backend App with Express (Node.js)

This guide explains how to create a simple backend application using Express in Node.js. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Why Use Express and Node.js?

- **Node.js** allows you to run JavaScript on the server side.
- **Express** simplifies the process of handling HTTP requests, routing, and middleware, making backend development faster and easier.

## Steps to Create the App

### 1. Initialize the Project

Open your terminal and run:

```bash
npm init -y
```

This creates a `package.json` file for your project.

### 2. Install Express

```bash
npm install express
```

### 3. Create the Server File

Create a file named `app.js` and add the following code:

```js
const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

#### Explanation

- `express()` creates an Express application.
- `app.get()` defines a route for HTTP GET requests to the root URL (`/`).
- `app.listen()` starts the server on the specified port.

### 4. Run the Server

In your terminal, run:

```bash
node app.js
```

Visit `http://localhost:3000` in your browser. You should see "Hello, World!".

## Summary

- **Express** helps you build web servers easily.
- **Node.js** executes JavaScript on the server.
- The server listens for requests and responds accordingly.

This setup is the foundation for building more complex backend applications.