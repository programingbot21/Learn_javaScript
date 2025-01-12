

// let str1 = "MyNameIsHyder";
// let spacedStr = str1.replace(/([a-z])([A-Z])/g, '$1 $2');
// console.log(spacedStr);

// let str = "MyNameIsHarry";
// let spStr = str.replace(/([a-z])([A-Z])/g, '$1 $2')
// console.log(spStr)

let str = "MyNameIsHarry";
let newS = str.substring(0,2)+" "+str.substring(2,6)+" "+str.substring(6,8)+" "+str.substring(8,13 )
console.log(newS)

let str1 = " MyNameIsHyder";
let newSe = str1.split(/(?=[A-Z])/).join(' ')
console.log(newSe)
