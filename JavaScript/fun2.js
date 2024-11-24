// Method Invocation

const person = {
    name: 'JOhn',
    age: 18,
    stu: function(){
        console.log('hello ' + this.name + 'and age ' + this.age)
    }
}
console.log(person.stu());


// Constructor Invocation:
function stu(name, age){
    this.name = name
    this.age =  age
}
const perso = new stu('Alice', 28)
console.log(perso.name)
console.log(perso.age);


const f = () =>{
    this === 0
}
console.log(f);


const f1 = (function() {
    this === 0
}).bind(this)
console.log(f1) // output Bound