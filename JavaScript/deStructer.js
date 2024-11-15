let arr = [1, 2, 4,];
// let [a, b, c] = arr;
 console.log(arr);


let [a, , , ...rest] = arr
console.log(a, rest)
