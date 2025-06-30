# Function Hoisting and Callback in JavaScript

## Function Hoisting

### What is Hoisting?
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means you can use functions before you declare them in your code.

### How Function Hoisting Works
- **Function Declarations** are hoisted completely. You can call them before their definition.
- **Function Expressions** (including arrow functions) are **not** hoisted in the same way. Only the variable declaration is hoisted, not the assignment.

#### Example:
```js
// Function Declaration (Hoisted)
greet(); // Output: Hello!

function greet() {
    console.log("Hello!");
}

// Function Expression (Not Hoisted)
sayHi(); // Error: sayHi is not a function

var sayHi = function() {
    console.log("Hi!");
};
```

### Why Use Hoisting?
- Allows you to organize code flexibly.
- Makes it easier to structure code logically, calling functions before their definitions.

### When is Hoisting Used?
- Whenever you use function declarations.
- Useful in large files or modules to keep code readable.

---

## Callback Functions

### What is a Callback?
A callback is a function passed as an argument to another function, to be executed later (after some operation completes).

### How Callbacks Work
- Functions are first-class objects in JavaScript, so they can be passed as arguments.
- Commonly used for asynchronous operations (like API calls, timers, or event handling).

#### Example:
```js
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

fetchData(function(result) {
    console.log(result); // Output after 1s: Data loaded
});
```

### Why Use Callbacks?
- Enable asynchronous programming.
- Allow code to run after a task completes (e.g., after fetching data).
- Promote code reuse and modularity.

### When are Callbacks Used?
- Handling asynchronous operations (AJAX, file reading, timers).
- Event handling (e.g., button clicks).
- Array methods (`map`, `filter`, `forEach`).

---

## Why Are These Concepts Helpful and Common?

- **Hoisting** simplifies code organization and reduces errors from calling functions before their declaration.
- **Callbacks** enable asynchronous and event-driven programming, which is essential for responsive web applications.
- Both concepts are common in many programming languages (though implementation details vary) because they support flexible, modular, and maintainable code structures.

---

## Summary Table

| Concept      | What It Is                        | Why Use It                | When Used                     |
|--------------|-----------------------------------|---------------------------|-------------------------------|
| Hoisting     | Moving declarations to the top    | Flexible code structure   | Function declarations         |
| Callback     | Passing functions as arguments    | Async/event-driven code   | Async ops, events, array methods |
