// let date = new Date()
// console.log(date)

console.log(new Date())

console.log( Date.now());  
// prints the currents timeStamp in milliSeconds

console.log(new Date().getTime())

let date = new Date('2024-11-28T12:00:00Z');
let timestamp = date.getTime();
console.log(timestamp); 

let startTimestamp = Date.now();


let startTimestamp1 = Date.now();
let endTimestamp = Date.now();
let timeDifference = endTimestamp - startTimestamp1;
console.log(`Time taken: ${timeDifference} milliseconds`);



