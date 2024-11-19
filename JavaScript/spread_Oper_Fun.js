const num = [1,3,5];
const sum =(a,b,c) => a+b+c;
console.log(sum(...num));

// Combining Arrays and Objects with the Spread Operator

const arr1 = [1, 2];
const obj1 = { a: 1, b: 2 };
const arr2 = [3, 4];
const obj2 = { c: 3, d: 4 };

// Merging arrays
const mergedArr = [...arr1, ...arr2];

// Merging objects
const mergedObj = { ...obj1, ...obj2 };

const mergedAeoj = {...arr1, ...obj1}

console.log(mergedArr); // [1, 2, 3, 4]
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
console.log(mergedAeoj);
