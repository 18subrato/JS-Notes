const person = {
  name: "Alex"
};

function sayHello(age) {
  console.log(`Hello, I'm ${this.name} and I'm ${age} years old.`);
}

sayHello.call(person, 25);
// Hello, I'm Alex and I'm 25 years old.




sayHello.apply(person, [30]);
// Hello, I'm Alex and I'm 30 years old.


const boundFn = sayHello.bind(person);
boundFn(35);
// Hello, I'm Alex and I'm 35 years old.
