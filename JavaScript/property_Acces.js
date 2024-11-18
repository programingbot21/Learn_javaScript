const person = { name: 'Alice', age: 30 };

console.log(person.name);  // Output: Alice
console.log(person.address);  
// Output: undefined (address is not a property of person)

// let user = null;
// console.log(user.name)
 // TypeError: Cannot read properties of null (reading 'name')

//  if (user !== null && user !== undefined) {
//     console.log(user.name);
//     console.log(user?.name); //// Output: undefined (no error thrown)
//   }
  

const numbers = [1, 2, 3];

console.log(numbers[2]);  // Output: 3
console.log(numbers[5]);  // undefined (index 5 is out of bounds