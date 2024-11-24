// Rest Parameters

function sum(...num){
    return num.reduce((total, numm) => total + numm)
}

console.log(sum(1,2,3,4,5,6))

// Variable-Length Argument Lists (Using arguments object)

function myfun(){
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total = total + arguments[i]
    }
    return total;
}
console.log(myfun(1,4,3,2,3,2,4,3))


function myf(){
    console.log(arguments.length)
}
myf('Bottle' , 5)