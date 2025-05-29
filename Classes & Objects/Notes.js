/*************************************************
*         JavaScript Classes & Objects Notes
*           From Basic to Advanced (2025)
**************************************************/

// 1. OBJECT LITERAL
const person = {
    name: "Alice",
    age: 25,
    greet: function () {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // Hello, Alice


// 2. BASIC CLASS
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
const p1 = new Person("Bob", 30);
p1.greet(); // Hi, I'm Bob and I'm 30 years old.


// 3. ADDING METHODS
class Car {
    constructor(model) {
        this.model = model;
    }

    drive() {
        console.log(`${this.model} is driving.`);
    }
}
const myCar = new Car("Tesla");
myCar.drive(); // Tesla is driving.


// 4. GETTER AND SETTER
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set area(value) {
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }
}
const rect = new Rectangle(4, 5);
console.log(rect.area); // 20
rect.area = 49;
console.log(rect.width, rect.height); // 7 7


// 5. INHERITANCE
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog("Rex", "Labrador");
dog.speak(); // Rex barks.


// 6. STATIC METHODS
class MathUtils {
    static add(x, y) {
        return x + y;
    }
}
console.log(MathUtils.add(5, 3)); // 8


// 7. PRIVATE FIELDS
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // ❌ SyntaxError


// 8. CLASS EXPRESSIONS
const User = class {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`Hi, ${this.name}`);
    }
};
const u = new User("Sam");
u.sayHi(); // Hi, Sam


// 9. MIXINS
let sayHiMixin = {
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
};

let sayByeMixin = {
    sayBye() {
        console.log(`Bye ${this.name}`);
    }
};

class UserWithMixins {
    constructor(name) {
        this.name = name;
    }
}
Object.assign(UserWithMixins.prototype, sayHiMixin, sayByeMixin);

const userMix = new UserWithMixins("Alex");
userMix.sayHi(); // Hi Alex
userMix.sayBye(); // Bye Alex


// 10. ABSTRACT CLASS PATTERN
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Abstract class cannot be instantiated");
        }
    }

    draw() {
        throw new Error("Method 'draw()' must be implemented.");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing circle...");
    }
}
const c = new Circle();
c.draw(); // Drawing circle...

/*************************************************
*              END OF NOTES FILE
**************************************************/
