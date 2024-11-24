// Object Destructuring 

function per({name = 'red', age = 23} = {}){
    console.log(`Hello, my name is ${name} and I am ${age} years old.`)
}

per()
per({name:'blue'})
per({name:'bad', age: 68})