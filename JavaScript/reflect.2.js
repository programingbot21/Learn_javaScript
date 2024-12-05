// function gre(name, age){
//     return `Hello , ${name} nad Age ${age}`
// }
// let res = Reflect.apply(gre, null, ['John', 23])
// console.log(res)

const person = {
    firstName: 'john',
    LastName: 'GHHe',
    age: 43,

    full: function(city){
        return `${this.firstName} ${this.LastName} ${city}`
    }
}
const anotherperson = {
    firstName: 'Alen',
    LastName: 'Aldkdl',
    age: 13
}

let ress = Reflect.apply(person.full, anotherperson, ['New York'])
console.log(ress)