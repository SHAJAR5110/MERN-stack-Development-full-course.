/*
    JavaScript Arrays and Objects - Examples
*/

// 1. Arrays

// Creating arrays
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, null];

// Accessing array elements
console.log(fruits[0]); // 'apple'

// Modifying array elements
fruits[1] = 'mango';
console.log(fruits); // ['apple', 'mango', 'orange']

// Array methods
fruits.push('grape'); // Add to end
fruits.pop();         // Remove from end
fruits.unshift('kiwi'); // Add to start
fruits.shift();         // Remove from start

console.log(fruits.length); // Array length

// Iterating over arrays
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Array map, filter, reduce
const doubled = numbers.map(num => num * 2);
const even = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(doubled, even, sum);

// 2. Objects

// Creating objects
const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'sports'],
    address: {
        city: 'New York',
        zip: 10001
    }
};

// Accessing object properties
console.log(person.name); // 'John'
console.log(person['age']); // 30

// Modifying object properties
person.age = 31;
person['isStudent'] = true;

// Adding new properties
person.email = 'john@example.com';

// Deleting properties
delete person.isStudent;

// Iterating over object properties
for (let key in person) {
    console.log(key, person[key]);
}

// Object methods
person.greet = function() {
    console.log('Hello, my name is ' + this.name);
};
person.greet();

// Object destructuring
const { name, age, address } = person;
console.log(name, age, address);

// Array of objects
const users = [
    { id: 1, username: 'alice' },
    { id: 2, username: 'bob' }
];

users.forEach(user => {
    console.log(user.id, user.username);
});