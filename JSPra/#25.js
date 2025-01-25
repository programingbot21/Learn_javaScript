let username = "my name is John";
console.log(username);
let ans = username.toUpperCase(username[0]);
console.log(ans)

let res = username.split(" ")
.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(res) 


let arr = "nhjf  hufuih ytutg uiyiuey"
let result = arr.slice(1);  // Extracts from index 1 to index 4 (not inclusive)
console.log(result);