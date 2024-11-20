const arr =[64, 84, 94, 94]
console.log(arr)

const a  = arr.map((value, index,  Array) => {
    console.log(value, index, Array)
    return value + 1;
})
console.log(a);