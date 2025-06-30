/*
    Object Cloning & Garbage Collector in JavaScript
*/

// 1. Object Cloning

// a) Reference Copy (Not Cloning)
const obj1 = { name: "Alice", age: 25 };
const obj2 = obj1; // obj2 is a reference to obj1
obj2.age = 30;
console.log("Reference Copy:", obj1, obj2); // Both changed

// b) Shallow Cloning

// i. Using Object.assign()
const original = { a: 1, b: 2 };
const clone1 = Object.assign({}, original);
clone1.a = 100;
console.log("Object.assign:", original, clone1);

// ii. Using Spread Operator
const clone2 = { ...original };
clone2.b = 200;
console.log("Spread Operator:", original, clone2);

// iii. Array shallow clone
const arr = [1, 2, 3];
const arrClone = [...arr];
arrClone[0] = 99;
console.log("Array Spread:", arr, arrClone);

// c) Deep Cloning

// i. Using JSON methods (works only for JSON-safe objects)
const deepObj = { x: 1, y: { z: 2 } };
const deepClone1 = JSON.parse(JSON.stringify(deepObj));
deepClone1.y.z = 42;
console.log("JSON Deep Clone:", deepObj, deepClone1);

// ii. Using structuredClone (modern browsers & Node.js 17+)
const deepClone2 = structuredClone(deepObj);
deepClone2.y.z = 100;
console.log("structuredClone:", deepObj, deepClone2);

// iii. Custom deep clone function (recursive)
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map(deepClone);
    const cloned = {};
    for (let key in obj) {
        cloned[key] = deepClone(obj[key]);
    }
    return cloned;
}
const deepClone3 = deepClone(deepObj);
deepClone3.y.z = 500;
console.log("Custom Deep Clone:", deepObj, deepClone3);

// 2. Garbage Collector

// Example: Unreachable objects are garbage collected
let user = { name: "Bob" };
user = null; // The object { name: "Bob" } is now unreachable and will be garbage collected

// Example: Circular references are handled by GC
function createCircular() {
    let a = {};
    let b = {};
    a.b = b;
    b.a = a;
    return a;
}
let circ = createCircular();
circ = null; // Both a and b become unreachable

console.log("Garbage Collector examples: See comments for explanation.");

/*
    Note:
    - JavaScript's garbage collector automatically frees memory for objects that are no longer reachable.
    - You can't force garbage collection manually in JS.
*/