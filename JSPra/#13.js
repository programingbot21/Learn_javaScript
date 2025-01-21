const arr = [1,2,3,4,5,6,7,8];
const resArr  = arr.reduce((e,k)=> {
    
    e.push(k*2);

    return e;

}, []);
console.log(resArr)

const arr1 = [1,2,3,4,5,6,7,8];
const resArr1  = arr.reduce((e,k)=> (e+k));
console.log(resArr1)