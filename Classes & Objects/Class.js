// oop_example.js

// 🔁 Mixins (Reusable behaviors)
const canFly = {
  fly() {
    console.log(`${this.name} is flying!`);
  }
};

const canSwim = {
  swim() {
    console.log(`${this.name} is swimming!`);
  }
};

// 🧱 Abstract Class Simulation
class Animal {
  constructor(name) {
    if (new.target === Animal) {
      throw new Error("Cannot instantiate abstract class Animal directly.");
    }
    this.name = name;
  }

  speak() {
    throw new Error("Method 'speak()' must be implemented.");
  }
}

// 🐶 Subclass Dog - Inheritance + Polymorphism
class Dog extends Animal {
  #breed; // Encapsulation (Private Field)

  constructor(name, breed) {
    super(name);
    this.#breed = breed;
  }

  speak() {
    console.log(`${this.name} barks. (Breed: ${this.#breed})`);
  }

  getBreed() {
    return this.#breed;
  }
}

// 🐱 Subclass Cat
class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

// 🦆 Subclass Duck with Mixins and Composition
class Duck extends Animal {
  constructor(name) {
    super(name);
    this.engine = new Engine(); // Composition
  }

  speak() {
    console.log(`${this.name} quacks.`);
  }

  startFlying() {
    this.engine.start(); // Using composition
    this.fly(); // Using mixin
  }

  startSwimming() {
    this.swim(); // Using mixin
  }
}

// ⚙️ Composed Class
class Engine {
  start() {
    console.log("Wing engine starts!");
  }
}

// 🧠 Static Utility Class
class AnimalUtil {
  static countLegs(animal) {
    if (animal instanceof Dog || animal instanceof Cat || animal instanceof Duck) {
      return 4;
    }
    return 0;
  }
}

// Add mixins to Duck
Object.assign(Duck.prototype, canFly, canSwim);

// 🧪 Test everything

const dog = new Dog("Rex", "German Shepherd");
const cat = new Cat("Whiskers");
const duck = new Duck("Daffy");

const animals = [dog, cat, duck];

for (const animal of animals) {
  animal.speak();
  console.log(`Legs: ${AnimalUtil.countLegs(animal)}`);
  console.log("-----");
}

// Duck-specific methods
duck.startFlying();
duck.startSwimming();

console.log(`Dog breed (encapsulation): ${dog.getBreed()}`);
