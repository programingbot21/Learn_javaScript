let arr = [2,1,3,4]

let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + 1
})
 console.log(a)