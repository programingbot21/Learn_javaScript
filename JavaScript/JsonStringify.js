const obj = { name: 'Alice', greet: function() { return 'Hello'; } }
console.log(obj)
console.log(JSON.stringify(obj));  // Output: '{"name":"Alice"}'



const obj1 = '{"name":"Alice","age":30 ,"country":"USA"}';
const person = JSON.parse(obj1)
 console.log(person)