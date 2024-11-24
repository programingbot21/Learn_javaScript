function per(name = 'rama', age = 23){
    console.log('My name ' + `${name}` 
    + ' namd my age ' + `${age}`)
}
per() // no argument
per('John') // call one argument
per('Richard', 14)
 

function gree(name = 'kunal', age = 34){
    console.log('My name ' + `${name}` 
    + ' namd my age ' + `${age}`)
}

gree()
gree(undefined)
gree('Alice');

// Destructuring with Default Values
function gr({name='green', age = 25} = {}){
    console.log(`Hello, my name is ${name} and I am ${age} years old.`)
}

gr();  
gr({ name: "Alice" });  
gr({ age: 30 });  
gr({ name: "Bob", age: 40 });


//Array Destructuring with Defaults:

function gre(name = 'kunal', age = 34){
    console.log('My name ' + `${name}` 
    + ' namd my age ' + `${age}`)
}

gre();
gre(undefined);
gre('Alice');

