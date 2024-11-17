let numbers = [1, 2, 4, 5, 6, 7];
for (let number of numbers){
    console.log(number)
}


let str = "Hello";
for (let char of str){
    console.log(char);
}

let map = new Map([
    ['name' , 'Alice'],
    ['age', 30],
    ['city', 'New York']

])
for (let value of map)
{
    console.log(value)
}