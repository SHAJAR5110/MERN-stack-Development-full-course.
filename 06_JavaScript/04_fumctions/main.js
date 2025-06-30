/**
 * JavaScript Functions - Types and Examples
 */

// 1. Function Declaration (Function Statement)
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(2, 3)); // 5

// 3. Anonymous Function (used as callback)
setTimeout(function() {
    console.log("Anonymous function executed after 1 second");
}, 1000);

// 4. Named Function Expression
const multiply = function mul(a, b) {
    return a * b;
};
console.log(multiply(3, 4)); // 12

// 5. Arrow Function
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // 6

// 6. Arrow Function with Multiple Statements
const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};
console.log(divide(8, 2)); // 4

// 7. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE executed!");
})();

// 8. Function Constructor (not recommended)
const sum = new Function('a', 'b', 'return a + b;');
console.log(sum(5, 7)); // 12

// 9. Generator Function
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// 10. Async Function
async function fetchData() {
    return "Data fetched!";
}
fetchData().then(console.log); // Data fetched!

// 11. Callback Function Example
function processUserInput(callback) {
    const name = "Bob";
    callback(name);
}
processUserInput(function(name) {
    console.log(`Callback says hi to ${name}`);
});

// 12. Recursive Function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// 13. Higher-Order Function
function operate(a, b, operation) {
    return operation(a, b);
}
console.log(operate(5, 3, add)); // 8

// 14. Default Parameters
function power(base, exponent = 2) {
    return base ** exponent;
}
console.log(power(3)); // 9

// 15. Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 16. Function as Object Method
const calculator = {
    square(n) {
        return n * n;
    }
};
console.log(calculator.square(6)); // 36

// 17. Function as Constructor
function Person(name) {
    this.name = name;
}
const person1 = new Person("Charlie");
console.log(person1.name); // Charlie