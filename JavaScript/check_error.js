const person = { name: 'Alice', age: 30 };
console.log('name' in person);
console.log('age' in person);
console.log('adress' in person)

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('adress'));
