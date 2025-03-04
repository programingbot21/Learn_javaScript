//function
// old version

var foo = function(firstName, land){
    return `${firstName} of ${land}`
}

console.log(foo('John', 'USA'));


// new version

const foo1 = (firstName, land) => `${firstName} of ${land}`
console.log(foo1('john', 'usa'));