// const obj = { name: 'Alice'}
// Object.preventExtensions(obj);
// //obj.age = 30; //Cannot add property age, object is not extensible
// // delete obj.name; // this property is properly work 
// console.log(obj);


//Object seal
// const obj1 ={name1: 'john'};
// Object.seal(obj1);

// //obj1.age = 23; // // Will not work because new properties can't be added
// obj1.name1 = 'Harry Potter'
// console.log(obj1) 

//Object freeze
const obj = { name: "Eve" };
Object.freeze(obj);

// obj.age = 40;  // Will not work because new properties can't be added
// obj.name = "Frank";  // Will not work because the properties are read-only

// delete obj.name;  // Will not work because the properties are non-configurable

console.log(obj); // { name: "Eve" }
