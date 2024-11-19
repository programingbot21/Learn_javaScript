let key = 'name';
let obj = {
    [key]:  'John'
}
console.log(obj.name)


//Using Expressions as Property Names


let obj1 = {
    ['age_' + 30]: 'Age Group'
}
console.log(obj1['age_30'])