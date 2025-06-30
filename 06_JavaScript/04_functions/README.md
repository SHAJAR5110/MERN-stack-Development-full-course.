# JavaScript Functions: Complete Guide

## What is a Function?

A **function** is a reusable block of code designed to perform a specific task. Functions help organize code, avoid repetition, and make programs easier to maintain.

---

## Types of Functions in JavaScript

### 1. Function Declaration

```js
function greet(name) {
    return `Hello, ${name}!`;
}
```
- **Hoisted**: Can be called before they are defined.
- **Use**: When you want to define a function at the top level.

---

### 2. Function Expression

```js
const add = function(a, b) {
    return a + b;
};
```
- **Not hoisted**: Cannot be called before definition.
- **Use**: When you want to assign a function to a variable or pass it as an argument.

---

### 3. Arrow Function

```js
const multiply = (a, b) => a * b;
```
- **Shorter syntax**.
- **Does not have its own `this`, `arguments`, or `super`**.
- **Use**: For concise functions, especially as callbacks or in array methods.

---

### 4. Anonymous Function

```js
setTimeout(function() {
    console.log('Hello!');
}, 1000);
```
- **No name**.
- **Use**: When a function is used only once or as a callback.

---

### 5. Named Function Expression

```js
const divide = function divideNumbers(a, b) {
    return a / b;
};
```
- **Has a name** (useful for recursion or debugging).

---

### 6. Immediately Invoked Function Expression (IIFE)

```js
(function() {
    console.log('IIFE runs immediately!');
})();
```
- **Runs as soon as it is defined**.
- **Use**: To create a local scope and avoid polluting the global namespace.

---

## Why Use Functions?

- **Reusability**: Write once, use many times.
- **Organization**: Break code into logical sections.
- **Maintainability**: Easier to update and debug.
- **Abstraction**: Hide complex logic behind simple interfaces.

---

## Why Are Functions Common in All Languages?

- **Modularity**: All languages need ways to organize code.
- **DRY Principle**: Avoid repeating code.
- **Readability**: Functions make code easier to understand.

---

## When and How to Use Functions

- **When**: Whenever you need to perform a task multiple times, or to organize code.
- **How**: Choose the function type based on context (e.g., arrow functions for callbacks, declarations for main logic).

---

## Why Arrow Functions Are Helpful

- **Concise syntax**.
- **Lexical `this` binding**: Useful in callbacks and methods.
- **Common in modern JavaScript**: Especially with array methods (`map`, `filter`, `reduce`).

---

## Example: Using Different Functions

```js
// Function Declaration
function sayHello() {
    console.log('Hello!');
}

// Function Expression
const sayBye = function() {
    console.log('Bye!');
};

// Arrow Function
const double = x => x * 2;

// IIFE
(function() {
    console.log('Runs immediately!');
})();
```

---

## Summary Table

| Type                | Syntax Example                | Hoisted | `this` Binding | Use Case                  |
|---------------------|------------------------------|---------|----------------|---------------------------|
| Declaration         | `function foo() {}`          | Yes     | Dynamic        | General purpose           |
| Expression          | `const foo = function(){}`   | No      | Dynamic        | Assign to variables       |
| Arrow Function      | `const foo = () => {}`       | No      | Lexical        | Callbacks, short methods  |
| IIFE                | `(function(){})()`           | No      | Dynamic        | Local scope, init code    |

---

Functions are a core part of JavaScript and essential for writing clean, efficient, and maintainable code.