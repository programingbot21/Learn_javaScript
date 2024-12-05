 //Dynamic Property Access: []

const user = {name: 'Alice', age: 23}
const pro = 'age';
console.log(user[pro])

user[pro] = 32;
console.log(user.age)

const ite = 'Literal';
const objj = {
    name1: 'Alice',
    [ite]: 439
}
console.log(objj)
console.log(objj.Literal)
console.log(objj.name1)