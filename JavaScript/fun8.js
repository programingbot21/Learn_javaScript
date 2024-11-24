//Array Destructuring
function per([name = 'red', age = 23] = []){
    console.log(`Hello, my name is ${name} and I am ${age} years old.`)
}

per()
per(['blue'])
per(['bad',  68])