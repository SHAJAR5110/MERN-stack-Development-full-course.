// ===============================
// JavaScript Loops
// ===============================

// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log("for loop iteration:", i);
}

// 2. while loop
let j = 0;
while (j < 5) {
    console.log("while loop iteration:", j);
    j++;
}

// 3. do...while loop
let k = 0;
do {
    console.log("do...while loop iteration:", k);
    k++;
} while (k < 5);

// 4. for...of loop (for arrays, strings, iterables)
const arr = [10, 20, 30];
for (const value of arr) {
    console.log("for...of value:", value);
}

const str = "hello";
for (const char of str) {
    console.log("for...of char:", char);
}

// 5. for...in loop (for object properties)
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log("for...in key:", key, "value:", obj[key]);
}

// ===============================
// JavaScript Strings
// ===============================

let sample = "Hello, JavaScript!";

// String length
console.log("Length:", sample.length);

// Accessing characters
console.log("First char:", sample[0]);
console.log("Last char:", sample[sample.length - 1]);

// String methods

// 1. toUpperCase() and toLowerCase()
console.log("Uppercase:", sample.toUpperCase());
console.log("Lowercase:", sample.toLowerCase());

// 2. indexOf() and lastIndexOf()
console.log("Index of 'Java':", sample.indexOf("Java"));
console.log("Last index of 'a':", sample.lastIndexOf("a"));

// 3. includes(), startsWith(), endsWith()
console.log("Includes 'Script':", sample.includes("Script"));
console.log("Starts with 'Hello':", sample.startsWith("Hello"));
console.log("Ends with '!':", sample.endsWith("!"));

// 4. slice(), substring(), substr()
console.log("slice(7, 17):", sample.slice(7, 17));
console.log("substring(7, 17):", sample.substring(7, 17));
console.log("substr(7, 10):", sample.substr(7, 10)); // deprecated

// 5. replace() and replaceAll()
console.log("Replace 'JavaScript' with 'World':", sample.replace("JavaScript", "World"));
console.log("Replace all 'l' with 'L':", sample.replaceAll("l", "L"));

// 6. split() and join()
const words = sample.split(" ");
console.log("Split by space:", words);
console.log("Join with '-':", words.join("-"));

// 7. trim(), trimStart(), trimEnd()
let padded = "   padded string   ";
console.log("Trimmed:", padded.trim());
console.log("Trim start:", padded.trimStart());
console.log("Trim end:", padded.trimEnd());

// 8. repeat()
console.log("Repeat 3 times:", "abc".repeat(3));

// 9. charAt() and charCodeAt()
console.log("charAt(1):", sample.charAt(1));
console.log("charCodeAt(1):", sample.charCodeAt(1));

// 10. concat()
console.log("Concat:", "Hello".concat(", ", "World!"));

// 11. Template literals
let name = "Alice";
console.log(`Hello, ${name}! Welcome to JavaScript.`);

// Looping through a string
for (let i = 0; i < sample.length; i++) {
    console.log(`Character at ${i}:`, sample[i]);
}