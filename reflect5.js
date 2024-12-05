const arr = {};
if(Reflect.defineProperty(object1, 'pro1', {value: 32})){
    console.log('pro1 Created');
}else{
    console.log('problem')
}
console.log(object1.pro1)