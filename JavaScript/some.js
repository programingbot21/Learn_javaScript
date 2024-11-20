const age = [20,3,34,23];
const b = age.some(checkAge)

function checkAge(age){
    return age >= 18
}
console.log(b) // one value is true Out is true