const myObj = {name: 'write'}
const myArray = [0,1,2];

const myObj2 = myObj;
const myArray2 = myArray;

myObj2.push = "fun";

myArray2.push(3)

console.log(myObj)
console.log(myObj2)

console.log(myArray);
console.log(myArray2)



