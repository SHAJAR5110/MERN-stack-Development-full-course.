# JavaScript Promises

## What are Promises?

A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

## Why use Promises?

- To handle asynchronous operations more efficiently.
- To avoid "callback hell" and make code easier to read and maintain.
- To chain multiple asynchronous tasks.

## How to use Promises

### Creating a Promise

```js
const myPromise = new Promise((resolve, reject) => {
    // asynchronous operation
    if (/* success */) {
        resolve('Success!');
    } else {
        reject('Error!');
    }
});
```

### Consuming a Promise

```js
myPromise
    .then(result => {
        console.log(result); // Success!
    })
    .catch(error => {
        console.error(error); // Error!
    });
```

### Chaining Promises

```js
doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .catch(error => handleError(error));
```

## Summary

Promises provide a cleaner, more robust way to work with asynchronous code in JavaScript.