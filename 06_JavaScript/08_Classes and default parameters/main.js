// JavaScript Classes and Default Parameters - Detailed Examples

// 1. Basic Class Declaration
class Animal {
    constructor(name = "Unknown", age = 0) { // Default parameters
        this.name = name;
        this.age = age;
    }

    speak(sound = "makes a sound") { // Default parameter
        console.log(`${this.name} ${sound}.`);
    }
}

// Usage
const animal1 = new Animal();
animal1.speak(); // Unknown makes a sound.

const animal2 = new Animal("Dog", 3);
animal2.speak("barks"); // Dog barks.

// 2. Class Expression
const Vehicle = class {
    constructor(type = "Car", wheels = 4) {
        this.type = type;
        this.wheels = wheels;
    }

    info() {
        return `Type: ${this.type}, Wheels: ${this.wheels}`;
    }
};

const v1 = new Vehicle();
console.log(v1.info()); // Type: Car, Wheels: 4

// 3. Inheritance with Default Parameters
class Person {
    constructor(name = "Anonymous") {
        this.name = name;
    }

    greet(greeting = "Hello") {
        console.log(`${greeting}, my name is ${this.name}.`);
    }
}

class Student extends Person {
    constructor(name, grade = "A") {
        super(name); // Calls Person's constructor
        this.grade = grade;
    }

    showGrade() {
        console.log(`${this.name}'s grade is ${this.grade}.`);
    }
}

const student1 = new Student();
student1.greet(); // Hello, my name is Anonymous.
student1.showGrade(); // Anonymous's grade is A.

const student2 = new Student("Alice", "B");
student2.greet("Hi"); // Hi, my name is Alice.
student2.showGrade(); // Alice's grade is B.

// 4. Static Methods and Default Parameters
class MathUtil {
    static add(a = 0, b = 0) {
        return a + b;
    }
}

console.log(MathUtil.add()); // 0
console.log(MathUtil.add(5)); // 5
console.log(MathUtil.add(5, 10)); // 15

// 5. Getters and Setters
class Rectangle {
    constructor(width = 1, height = 1) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set dimensions({ width = 1, height = 1 } = {}) {
        this.width = width;
        this.height = height;
    }
}

const rect = new Rectangle();
console.log(rect.area); // 1
rect.dimensions = { width: 5, height: 2 };
console.log(rect.area); // 10

// 6. Private Fields (ES2022+)
class Counter {
    #count = 0; // Private field with default value

    increment(step = 1) {
        this.#count += step;
        return this.#count;
    }

    get value() {
        return this.#count;
    }
}

const counter = new Counter();
console.log(counter.increment()); // 1
console.log(counter.increment(3)); // 4
console.log(counter.value); // 4

// Summary:
// - Classes are templates for creating objects.
// - Constructors and methods can have default parameters.
// - Supports inheritance, static methods, getters/setters, and private fields.