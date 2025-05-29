/*************************************************
*           JAVASCRIPT NOTES (2025)
*        From Basics to Advanced Concepts
*      Includes Top Interview Questions
**************************************************/

/* -------------------- BASICS -------------------- */

// 1. Variables (var, let, const)
var x = 10;     // function-scoped
let y = 20;     // block-scoped
const z = 30;   // block-scoped and read-only

// 2. Data Types
let str = "Hello";
let num = 100;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "Alice", age: 25 };
let und = undefined;
let nul = null;

/* typeof examples */
console.log(typeof str);  // "string"
console.log(typeof nul);  // "object" (quirk)

/* 3. Operators */
let a = 5 + 3;     // 8
let b = 10 % 3;    // 1
let c = 2 ** 3;    // 8 (exponentiation)

/* 4. Conditional Statements */
if (a > 5) {
    console.log("Greater");
} else {
    console.log("Lesser");
}

// Ternary
let result = a > 5 ? "Yes" : "No";

/* 5. Loops */
for (let i = 0; i < 3; i++) {
    console.log(i);
}

let i = 0;
while (i < 3) {
    console.log(i++);
}

// for..of (arrays)
for (let val of [10, 20, 30]) {
    console.log(val);
}

// for..in (objects)
for (let key in obj) {
    console.log(key, obj[key]);
}

/* -------------------- FUNCTIONS -------------------- */

// Function Declaration
function greet(name) {
    return "Hello " + name;
}

// Function Expression
const add = function(x, y) {
    return x + y;
};

// Arrow Function
const square = x => x * x;

/* -------------------- OBJECTS & ARRAYS -------------------- */

// Object destructuring
const person = { name: "Bob", age: 30 };
const { name, age } = person;

// Spread & Rest
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];  // [1,2,3,4,5]

function sum(...args) {
    return args.reduce((a, b) => a + b);
}

/* -------------------- ADVANCED JS -------------------- */

// Closures
function outer() {
    let count = 0;
    return function inner() {
        return ++count;
    };
}
const counter = outer();
console.log(counter()); // 1

// Callback
function fetchData(cb) {
    setTimeout(() => {
        cb("Data loaded");
    }, 1000);
}

// Promises
const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Resolved Data"), 1000);
    });
};

// Async/Await
async function showData() {
    const data = await getData();
    console.log(data);
}

// this keyword
const obj2 = {
    value: 10,
    show: function() {
        console.log(this.value);
    }
};

// ES6 Classes
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Inheritance
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks

// Modules (ES6) — only in module environments
// export const PI = 3.14;
// import { PI } from './math.js';

/* -------------------- DOM & EVENTS (Browser) -------------------- */
// Basic DOM
// document.getElementById('id');
// document.querySelector('.class');

// Event Listener
// element.addEventListener('click', () => alert('Clicked!'));

/* -------------------- INTERVIEW QUESTIONS -------------------- */

/**
 * Q1: Difference between var, let, and const?
 * A: var is function-scoped; let and const are block-scoped.
 *    const cannot be reassigned.
 *
 * Q2: What is closure?
 * A: A closure is a function that remembers its outer scope variables.
 *
 * Q3: What is the difference between == and === ?
 * A: == allows type coercion; === checks type and value.
 *
 * Q4: What is hoisting?
 * A: JavaScript moves declarations to the top of their scope.
 *
 * Q5: What is event bubbling?
 * A: Events propagate from the target element up to ancestors.
 *
 * Q6: What is the 'this' keyword?
 * A: 'this' refers to the context the function was called in.
 *
 * Q7: What is a promise?
 * A: An object that represents the eventual completion of an async task.
 *
 * Q8: Difference between call, apply, and bind?
 * A: call/apply invoke functions with context; bind returns a new function.
 *
 * Q9: What is async/await?
 * A: Syntactic sugar over promises to make async code easier to read.
 *
 * Q10: What are arrow functions and how are they different?
 * A: Arrow functions have lexical `this` and are more concise.
 */

/*************************************************
*               END OF FILE
**************************************************/
