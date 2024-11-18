//  const Student1 = {
//     name: "Kamal",
//     lastname: "bansf",
//     age: "12",
//     class:"7"
// } 
//Normal Object

function Student(first, last, age, cls){
        this.firstName = first,
        this.lastName = last,
        this.age = age,
        this.class = cls
    }

var student1 = new Student("Ujjwal", "ratee", 12, 6)
var student2 = new Student("Ujjwal", "ratee", 12, 6)
var student3 = new Student("Ujjwal", "ratee", 12, 6)

var student4 = new Student("Ujjwal", "ratee", 12, 6)
console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)

student1.nationality = "Indian";
console.log(student1)


