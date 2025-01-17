// function abc(a,b){
//     'use strict'
//     a=100
//     b=200
//     return args[0] + args[1];
//     console.log(a+b);
// }
// console.log(abc(400,200))

function abc(a,b){
    'use strict'
    a=100
    b=200
    return arguments[0] +arguments[1];
    console.log(a+b);
}
console.log(abc(400,200))