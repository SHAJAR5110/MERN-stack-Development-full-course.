// What is a Closure in JavaScript?
// A closure is a function that "remembers" its lexical scope even when the function is executed outside that scope.

// Why use Closures?
// - Data privacy (encapsulation)
// - Factory functions
// - Partial application and currying
// - Event handlers and callbacks

// How do Closures work?
// Example 1: Basic Closure
function outer() {
    let message = "Hello from outer!";
    function inner() {
        console.log(message); // inner "closes over" message
    }
    return inner;
}
const fn = outer();
fn(); // Output: Hello from outer!

// Example 2: Data Privacy
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Example 3: Factory Function
function makeMultiplier(factor) {
    return function(x) {
        return x * factor;
    };
}
const double = makeMultiplier(2);
console.log(double(5)); // 10

// Example 4: Partial Application
function greet(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}
const sayHello = greet("Hello");
console.log(sayHello("Alice")); // Hello, Alice!

// Example 5: Closures in Loops (with let)
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("let loop:", i);
    }, 100);
}

// Example 6: Closures in Event Handlers
function setupButton() {
    let clicked = 0;
    document.getElementById("myBtn").onclick = function() {
        clicked++;
        console.log(`Button clicked ${clicked} times`);
    };
}
// Call setupButton() after DOM is loaded

// Summary: Closures allow functions to access variables from their defining scope, enabling powerful patterns in JavaScript.