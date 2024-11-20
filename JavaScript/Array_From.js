const str = "12345"


console.log(typeof(str))
console.log(str);

const res = Array.from(str)
console.log(typeof(res))
console.log(res)


const func = function(){
    return Array.from(arguments).join('         ');
}
const res1 = func('i', 'y', 'y', 'u', 'u');
console.log(res1)

const fun1 = function(){
    return Array.from(arguments).join('')
}
const resu = fun1('b', 'e', 's', 't');
console.log(resu)


const fun2 = function(){
    return Array.from(arguments).join('')
}
const ree =  fun2('w', 'i', 'n', 'e')
console.log(ree)