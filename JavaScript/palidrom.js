 function ispalidrome(x){
    return x === +x.toString().split("").reverse().join("");
}
const res = ispalidrome(121);
console.log(res)