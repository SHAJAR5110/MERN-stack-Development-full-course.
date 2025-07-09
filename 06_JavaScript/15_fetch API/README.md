# Fetch API in JavaScript

The Fetch API provides a modern way to make HTTP requests in JavaScript. It is used to communicate with servers and load or send data asynchronously.

## What is Fetch API?

Fetch API is a built-in browser interface for fetching resources (e.g., data from a server). It returns Promises, making it easier to handle asynchronous operations.

## Why use Fetch API?

- Simpler and cleaner syntax compared to older methods like `XMLHttpRequest`
- Supports Promises for easier async code
- Built-in support for JSON and other data formats

## How to Use Fetch API

### GET Request

```js
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

### POST Request

```js
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' })
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## Summary

- **GET**: Retrieve data from a server.
- **POST**: Send data to a server.
- Fetch API is modern, promise-based, and easy to use for HTTP requests in JavaScript.