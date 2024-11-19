const person = {
    name: 'Alce',
    age: 30,
    introduce(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} year old`)
    }
};
console.log(person.introduce())

class Person1 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Shorthand method definition
    introduce() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const perso = new Person1('Ali', 30);
  perso.introduce(); // Output: "Hello, my name is Alice and I'm 30 years old."
  