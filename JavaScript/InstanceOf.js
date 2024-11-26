function Person(name){
    this.name = name
}

const Person1 = new Person('Alice')

console.log(Person1 instanceof Person)
console.log(Person1 instanceof Object) // output true
console.log(Person1 instanceof Array)  // outout false


var arr = 'red'//
console.log(arr instanceof Object)

console.log(arr instanceof Array)
console.log(arr instanceof String)
