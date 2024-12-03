//Value (value)

// const obj = {};
// Object.defineProperty(obj, 'name', {
//     value: 'Jone'
// })

// console.log(obj.name)

// writableconst obj = {};

// const obj = {};
// Object.defineProperty(obj, 'name', {
//   value: 'John',
//   writable: false // Can't be changed
// });

// console.log(obj.name); // John

// obj.name = 'Jane'; // This won't change the value of 'name'
// console.log(obj.name); // John


// const obj = {};
// Object.defineProperty(obj, 'name' ,{
//     value: 'Alice',
//    // writable: false //  can not be change
// })
// console.log(obj.name)

// obj.name = 'john';
// console.log(obj.name)

// Enumerable (enumerable)

// const obj1 = {};
// Object.defineProperty(obj1, 'name', {
//     value: 'Ronald',
//     enumerable: false
// });

// for(let key in obj1){
//    console.log(key)
// }

// console.log(Object.keys(obj1))

// Configurable (configurable)

const obj = {};
Object.defineProperty(obj, 'name',{
    value: 'John',
    configurable: false //Can't delete or modify the property attributes
});
console.log(obj.name)

delete obj.name;
console.log(obj.name)

Object.defineProperty(obj, 'name',{
    writable: true
})