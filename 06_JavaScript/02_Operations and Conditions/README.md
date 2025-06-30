# JavaScript Operations and Conditions

This document provides an overview of operations and conditional statements in JavaScript.

## 1. Operations

### Arithmetic Operators
- `+` Addition: `a + b`
- `-` Subtraction: `a - b`
- `*` Multiplication: `a * b`
- `/` Division: `a / b`
- `%` Modulus (Remainder): `a % b`
- `**` Exponentiation: `a ** b`
- `++` Increment: `a++`
- `--` Decrement: `a--`

### Assignment Operators
- `=` Assign: `a = b`
- `+=` Add and assign: `a += b`
- `-=` Subtract and assign: `a -= b`
- `*=` Multiply and assign: `a *= b`
- `/=` Divide and assign: `a /= b`
- `%=` Modulus and assign: `a %= b`

### Comparison Operators
- `==` Equal to
- `===` Strict equal to (type + value)
- `!=` Not equal to
- `!==` Strict not equal to
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to

### Logical Operators
- `&&` Logical AND
- `||` Logical OR
- `!` Logical NOT

### String Operators
- `+` Concatenation: `'Hello' + ' World'`

### Other Operators
- `typeof` Returns the type of a variable
- `instanceof` Checks if an object is an instance of a class

## 2. Conditional Statements

### if Statement
```js
if (condition) {
    // code to execute if condition is true
}
```

### if...else Statement
```js
if (condition) {
    // code if true
} else {
    // code if false
}
```

### else if Statement
```js
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else {
    // code if none are true
}
```

### Ternary Operator
```js
condition ? valueIfTrue : valueIfFalse;
```

### switch Statement
```js
switch(expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}
```

## 3. Examples

```js
let a = 10, b = 5;

// Arithmetic
let sum = a + b;

// Comparison
if (a > b) {
    console.log('a is greater');
}

// Logical
if (a > 0 && b > 0) {
    console.log('Both are positive');
}

// Ternary
let result = (a === b) ? 'Equal' : 'Not Equal';
```

---

**Summary:**  
JavaScript provides a variety of operators for performing calculations and comparisons, as well as conditional statements for controlling the flow of code based on logical conditions.