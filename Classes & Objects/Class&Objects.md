# 📘 JavaScript Classes & Objects – Complete Guide

## 🔹 1. Objects in JavaScript

An **object** is a collection of key-value pairs where values can be data or functions.

```js
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Hello, my name is John
