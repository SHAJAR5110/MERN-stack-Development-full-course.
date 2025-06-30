# Variables and Data Types in JavaScript


## Variables

Variables are containers for storing data values. In JavaScript, you can declare variables using `var`, `let`, or `const`.

- **`var`**: Function-scoped, can be redeclared and updated.
- **`let`**: Block-scoped, can be updated but not redeclared in the same scope.
- **`const`**: Block-scoped, cannot be updated or redeclared. Must be initialized at declaration.

**Example:**
```js
var name = "Alice";
let age = 25;
const PI = 3.14;
```

## Data Types

JavaScript supports several data types, divided into two categories: **primitive** and **non-primitive (reference)** types.

### Primitive Data Types

1. **String**: Represents textual data.
    ```js
    let city = "London";
    ```
2. **Number**: Represents both integer and floating-point numbers.
    ```js
    let score = 99.5;
    ```
3. **Boolean**: Represents logical values: `true` or `false`.
    ```js
    let isActive = true;
    ```
4. **Undefined**: A variable declared but not assigned a value.
    ```js
    let result;
    ```
5. **Null**: Represents the intentional absence of any value.
    ```js
    let data = null;
    ```
6. **Symbol**: Used for unique identifiers (introduced in ES6).
    ```js
    let id = Symbol("id");
    ```
7. **BigInt**: For large integers beyond the safe integer limit.
    ```js
    let bigNumber = 12345678901234567890n;
    ```

### Non-Primitive (Reference) Data Types

1. **Object**: Collection of key-value pairs.
    ```js
    let person = { name: "Bob", age: 30 };
    ```
2. **Array**: Ordered list of values.
    ```js
    let colors = ["red", "green", "blue"];
    ```
3. **Function**: Block of code designed to perform a task.
    ```js
    function greet() { console.log("Hello!"); }
    ```

## Dynamic Typing

JavaScript is dynamically typed, meaning variables can hold any data type and can change type at runtime.

**Example:**
```js
let value = 10;      // Number
value = "Ten";       // Now a String
```

## Summary

- Use `let` and `const` for modern JavaScript code.
- Understand the difference between primitive and reference types.
- JavaScript variables can change types dynamically.
- Properly choosing variable types and declarations improves code readability and reliability.