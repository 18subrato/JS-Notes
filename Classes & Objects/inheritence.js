class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const s1 = new Student("Bob", 20, "A");
s1.greet();  // Hi, I’m Bob
s1.study();  // Bob is studying.
