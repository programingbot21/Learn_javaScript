const person ={
    name: 'Ram',
    Age: 23,
    class: 4
}
console.log(person)
console.log(person.Age)

person.city = 'Bangalore' // Adding a new key
person.Age = 34   // Updating a Value
console.log(person)

delete person.Age  // Delete the key
console.log('Age Delete : ' + person)
for(let key in person){
    console.log(key + " " + person[key])
}


