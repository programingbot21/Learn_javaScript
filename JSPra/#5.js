console.log(typeof typeof 100);

const num = [,2,3,4];
num[100] = 500;
console.log(num)

const arr=[...'Praveen']
console.log(arr)

console.log(parseInt('10+2'));
console.log(parseInt("7FM"));
console.log(parseInt("M7F"))

console.log([1,2].map(num=>{
    if(num>0) return;
    return num * 2;
}))