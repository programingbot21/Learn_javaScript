console.log([1,2].map(num=>{
    if(num>0) return ; // return undefine
    return num * 2;
}))

function abc(){
    return;
}
console.log(abc())