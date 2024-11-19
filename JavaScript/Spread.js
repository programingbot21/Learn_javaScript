const arr = [1,3,4,3,6];
const arrCop = [...arr];
console.log(arrCop)
// console.log(arr == arrCop) // output false

// merging Array
const arr1 = [1,3];
const arr2 = [2,5];
const merg = [...arr1, ...arr2]
console.log(merg)

//Adding Element To Arrays

const ar = [1,2,4,3,5,6,7];
const arrAdd = [0, ...ar ,9]
console.log(arrAdd);