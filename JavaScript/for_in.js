const numbers = [10,20,30,50]
for(let index in numbers){
    console.log(index + " " + numbers[index])
}

const person = {
    name: 'john',
    age:  '30',
    job: 'Devlop'

};
for(let key in person){
    console.log(key + " " + person[key])
}