const person = {name:'Alice', age:'30'}
const job = { title: 'Engineer', company: 'Acme Corp' };

 Object.assign(person, job) //Merging Objects
console.log(person)

const person1 = {name1:'john', age1:'30'}
const job1 = { title: 'Eng', company: 'Acme Corp' };

const extendsPerson1 = {...person1, ...job1}
console.log(extendsPerson1)
