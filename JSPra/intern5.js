const num = [1,2,3,4,5,6,7];
const sum = num.reduce((acc, num) => acc + num , 0)
console.log(sum);

const num1 = [100, 200, 300, 500, 50, 60,7];
const gre = num1.reduce((acc, num) => acc > num ? acc : num , num[0] ) 
console.log(gre);


const num2 = ["apple", "banana", "apple", "orange", "banana", "apple" ]

const count = num2.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1
    return acc;
},{})
console.log(count)


function countVowels(str){
    const vowels = 'aeiouAEIOU';
    return str.split('').reduce((count, char) => {
        return vowels.includes(char) ? count + 1 : count;
    },0)
}
console.log(countVowels('hello world'));