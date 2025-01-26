const user = {
    id: 123,
    name: "RAM",
    agr: 29,
    add: {
        city: "Delhi",
        pin: 94090394
    }
}
// block id
//Object.freeze(user)// freeze the full object


Object.defineProperties(user, {id:{writable: false,
configurable: false}})

// Object.defineProperty(user, 'id', {writable: false,
//     configurable: false}) //both property are same

// user.name = 'Yasus'
// console.log(user.name)

user.id = 76
console.log(user.id)