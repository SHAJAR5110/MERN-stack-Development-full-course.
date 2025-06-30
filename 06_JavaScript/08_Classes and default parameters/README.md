# JavaScript Classes and Default Parameters

## Classes in JavaScript

### What Are Classes?
Classes are a template for creating objects. They encapsulate data and behavior, making code more organized and reusable. JavaScript classes were introduced in ES6 (ECMAScript 2015) and provide a clearer, more concise syntax for creating objects and dealing with inheritance.

### Why Use Classes?
- **Organization:** Group related data and functions together.
- **Reusability:** Create multiple objects with similar structure and behavior.
- **Inheritance:** Share functionality between classes using `extends`.
- **Readability:** Cleaner and more understandable code.

### How to Use Classes

```js
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

const dog = new Animal('Rex');
dog.speak(); // Rex makes a sound.
```

#### Inheritance Example

```js
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const pet = new Dog('Buddy');
pet.speak(); // Buddy barks.
```

### When to Use Classes?
- When you need to create multiple objects with similar properties and methods.
- When you want to use inheritance to share code.
- When you want to organize complex codebases.

---

## Default Parameters in JavaScript

### What Are Default Parameters?
Default parameters allow you to specify default values for function parameters. If no value or `undefined` is passed, the default is used.

### Why Use Default Parameters?
- **Simplicity:** Avoid extra checks for `undefined` or missing arguments.
- **Readability:** Make function behavior clear and predictable.
- **Flexibility:** Allow functions to be called with fewer arguments.

### How to Use Default Parameters

```js
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet('Alice'); // Hello, Alice!
```

### When to Use Default Parameters?
- When a function parameter is optional.
- When you want to provide a fallback value.
- To simplify function calls and avoid manual checks.

---

## Why Are These Features Helpful and Common?

- **Classes** are a fundamental concept in object-oriented programming, making code modular, maintainable, and scalable. Most modern languages (like Java, Python, C#, etc.) use classes for these reasons.
- **Default Parameters** reduce boilerplate code and make functions easier to use and understand. They are supported in many languages (like Python, C++, etc.) for similar reasons.

---

## Summary

- **Classes** help structure and reuse code using object-oriented principles.
- **Default Parameters** make functions more flexible and easier to use.
- Both features are widely used in JavaScript and other languages to write clean, efficient, and maintainable code.
