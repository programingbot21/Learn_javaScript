//The length Property
// string
let str = 'I am a John';
console.log(str.length)

//Array length

let arr = [1,2,4,3,3,2,8]
console.log(arr.length)

// length set

let arr1 = [1,2,4,3,3,2,8]
arr1.length = 3;
console.log(arr1)

//Arguments Object
function obj(){
    console.log(arguments.length)
}
console.log(obj(1,2,3,4))