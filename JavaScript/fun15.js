// closures fun
let scope = 'global scope';
function checkscope(){
    let scope = 'local scope'
    function f(){
        return scope;
    }
    return f
}
let s = checkscope()()
console.log(s)

// 
let scope1 = 'glo scope'
function checksco(){
    let scope = 'loco scope'
    function ff(){
        return scope
    }
    return ff()
}

let a = checksco()
console.log(a)