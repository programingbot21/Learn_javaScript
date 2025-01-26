// convert set to arry using 3 diff way

let input = new Set([1,2,3,4,5])
console.log(input)

let res = [...input]
console.log(res);

let res1 = Array.from(input);
console.log(res1)

console.log( new Array(...input))

