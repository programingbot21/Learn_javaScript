
const mySet =  new Set();

mySet.add('myNAme')
mySet.add('hits')
mySet.add('thiseo')
console.log(mySet) 
mySet.delete('hits')
console.log(mySet)
console.log(mySet.has('myNAme'))

// Iterating a set
for(let item of mySet) {
  console.log("Item List : ", item)
}

// Iterating ForEach

mySet.forEach(element => {
    console.log('Item List', element)
});


const arr = [1,2,3,4,5,3,2,1]
const newArr = new Set(arr)
console.log(newArr)

console.log(newArr.has(5))