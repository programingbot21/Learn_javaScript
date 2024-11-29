let obj = {
    name: 'red',
    age: 27,
    class:23
}
const str = JSON.stringify(obj)
console.log(str)

const ob = JSON.parse(str)
console.log(ob)