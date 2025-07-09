# Closures in JavaScript

## What is a Closure?

A **closure** is a function that remembers its outer variables and can access them even after the outer function has finished executing.

## Why Use Closures?

- **Data Privacy:** Create private variables.
- **Stateful Functions:** Maintain state between function calls.
- **Callbacks & Event Handlers:** Useful in asynchronous code.

## How Do Closures Work?

When a function is defined inside another function, it forms a closure. The inner function has access to:

- Its own scope
- The outer function's variables
- The global scope

### Example

```js
function outer() {
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

Here, `inner` forms a closure over `count`, preserving its value between calls.

## Summary

Closures are a powerful feature in JavaScript for encapsulating data and creating more modular, maintainable code.