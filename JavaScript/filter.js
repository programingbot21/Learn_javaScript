const arr = [45, 54, 4, 3, 5, 45]
const a = arr.filter((value) => {
   return value < 10
})
console.log(a)


const arr1 = [2,3,4,5,6,6];
// const a1 = arr1.filter((val) => {
//     return val * 5
// })
const a1 = arr1.map(val => val * 4)
console.log(a1)


const ar = [2,3,34,53,10,12,14,16]
const aa = ar.filter(val => val % 2 === 0)
console.log(aa);