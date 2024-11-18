const sym1 = Symbol('s1');
const sym2 = Symbol('s2');

const obj = {
  [sym1]: 'symbol 1',
  'apple': 'fruit',
  [sym2]: 'symbol 2',
  'banana': 'fruit'
};

for (let key in obj) {
  console.log(key, obj[key]);  // Output will be: apple, banana
}

console.log(Object.keys(obj));    // ["apple", "banana"]
console.log(Object.values(obj)); 
console.log(Object.entries(obj))
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(s1), Symbol(s2)]
console.log(Object.getOwnPropertyNames(obj));