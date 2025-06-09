// 1. What is Object-Oriented Programming in JavaScript?
// Answer: A paradigm using objects and classes to structure code. JavaScript supports prototypal inheritance and ES6 classes.

// 2. Four Pillars of OOP
// - Encapsulation
// - Abstraction
// - Inheritance
// - Polymorphism

// 3. Creating Objects in JavaScript

// Object literal
const person1 = {
  name: "Alice",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

// Constructor function
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

// ES6 class
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// 4. Difference between __proto__ and prototype
// prototype: a property of functions used when creating new objects.
// __proto__: a property of an object pointing to its constructor’s prototype.

// 5. Inheritance using ES6 Classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.

// 6. Private Properties using #
class Secret {
  #password;

  constructor(password) {
    this.#password = password;
  }

  getPassword() {
    return this.#password;
  }
}

const mySecret = new Secret("12345");
console.log(mySecret.getPassword()); // 12345

// 7. Static vs Instance Methods
class MathUtil {
  static add(x, y) {
    return x + y;
  }
}

console.log(MathUtil.add(2, 3)); // 5

// 8. Polymorphism Example
class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

const animals = [new Dog("Buddy"), new Cat("Kitty")];
animals.forEach(animal => animal.speak());

// 9. Method Overriding Example
class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps.`);
  }
}

// 10. Composition vs Inheritance (Example of Composition)
const canFly = obj => ({
  fly: () => console.log(`${obj.name} is flying!`)
});

const canSwim = obj => ({
  swim: () => console.log(`${obj.name} is swimming!`)
});

function createDuck(name) {
  const duck = { name };
  return Object.assign(duck, canFly(duck), canSwim(duck));
}

const daffy = createDuck("Daffy");
daffy.fly(); // Daffy is flying!
daffy.swim(); // Daffy is swimming!

// 11. Mixins in JavaScript
const mixinGreet = {
  greet() {
    console.log("Hello from mixin!");
  }
};

const user = {
  name: "Tom"
};

Object.assign(user, mixinGreet);
user.greet(); // Hello from mixin!

// 12. Shallow vs Deep Copy
const original = {
  name: "John",
  nested: { age: 30 }
};

const shallowCopy = { ...original };
shallowCopy.nested.age = 40;
console.log(original.nested.age); // 40 (because nested is still shared)

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.nested.age = 50;
console.log(original.nested.age); // 40 (deep copy did not affect original)
