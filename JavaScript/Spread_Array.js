const SpreArr = [1,3,5,6,7];
const Arr = [...SpreArr]
console.log(Arr)


// Array Spread Merge

const arr1 = [2, 4]
const arr2 = [5, 6]
const mergedArray = [...arr1, ...arr2]
console.log(mergedArray)

// Adding Elements to an Array

const oldArr = [1, 3, 5]
const newArr = [0, 2, ...oldArr, 3]
console.log(newArr)

// Using Spread with Array Destructuring
const arrr = [1,2,3,4,5]
const [first, second, ...rest] = arrr;
console.log(first)
console.log(second)
console.log(...rest)


const ori = [{name: 'Alice'}];
const copy = [...ori]

copy[0].name = 'Bomm';
console.log(ori[0].name)

//Flattening Arrays 
const nerArr = [1,[2,3], [4,5]];
const flat = [...nerArr]
console.log(flat)


/// function Array

function sum(a,b,c){
    return a+b+c;
}
// const number = [1,3,5]
console.log(sum(2,4,5))


// slice in Array

const a = ["Sanjay", "Ram", 'Gandi', 'JHG;']
const slice = [a.slice(1,3)];
console.log(slice)

// Splice in Array

const ar = ["Ganga", 'Gita', 'Yamuna']
ar.splice(2,0, "Neha", 'nikita')
console.log(ar)