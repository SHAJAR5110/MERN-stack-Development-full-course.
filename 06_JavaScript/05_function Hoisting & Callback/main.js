/*
    Hoisting & Function Calls in JavaScript
    ---------------------------------------
    This file demonstrates various examples of hoisting and function calls.
*/

// 1. Variable Hoisting with var
console.log(a); // undefined (declaration is hoisted, initialization is not)
var a = 10;
console.log(a); // 10

// 2. Function Declaration Hoisting
foo(); // "Function Declaration Hoisted!"
function foo() {
    console.log("Function Declaration Hoisted!");
}

// 3. Function Expression Hoisting
// bar(); // Uncaught TypeError: bar is not a function
var bar = function() {
    console.log("Function Expression NOT Hoisted!");
};
bar(); // "Function Expression NOT Hoisted!"

// 4. let and const are NOT hoisted like var
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20

// 5. Arrow Function Expression Hoisting
// baz(); // Uncaught TypeError: baz is not a function
const baz = () => {
    console.log("Arrow Function Expression NOT Hoisted!");
};
baz(); // "Arrow Function Expression NOT Hoisted!"

// 6. Function Calls: Passing Arguments
function add(x, y) {
    return x + y;
}
console.log(add(5, 3)); // 8

// 7. Function Calls: Callback Example
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Alice", sayGoodbye);

// 8. Nested Function Calls
function outer() {
    function inner() {
        console.log("Inner function called!");
    }
    inner();
}
outer();

// 9. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE executed!");
})();

// 10. Hoisting with Multiple Functions
hoistedFunc();
function hoistedFunc() {
    console.log("This function is hoisted!");
}

// 11. Function Overwriting due to Hoisting
function test() {
    console.log("First version");
}
function test() {
    console.log("Second version");
}
test(); // "Second version"

// 12. Function as a Callback (Anonymous)
setTimeout(function() {
    console.log("Callback function executed after 1 second!");
}, 1000);