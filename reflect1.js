const obj = {
    name: 'Rahul',
    age: 16
}
// console.log(Reflect.get(obj, 'name'))
Reflect.set(obj, 'name', 'Boby');
console.log(obj.name)