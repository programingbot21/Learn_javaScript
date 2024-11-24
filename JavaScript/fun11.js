// Destructuring an Object

function stu({name, age}){
    console.log('My name is ' + `${name} ` + ' and my age ' + `${age}`)

}
const per = {
    name: 'John',
    age: 54
}
stu(per)

// Default Values in Destructuring
function grr({name = 'red', age = 23}){
    console.log('My name is ' + `${name} ` + ' and my age ' + `${age}`)
}
grr({})