const age = [20,3,34,23];
const b = age.every(checkAge)

function checkAge(age){
    return age >= 18
}
console.log(b)