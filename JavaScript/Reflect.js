const obj = {
    name:'John',
    age: 46
}

console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertyDescriptor(obj, 'age'))
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

