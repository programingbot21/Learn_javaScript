// Destructuring an Array

function arr([color1, color2, color3]){
    console.log(`The First color is ${color1} and the sec 
    color ${color2} or third color ${color3}`)
}
const col = ['red' , 'green', 'blue']
arr(col)

// Nested Array Destructuring

function display([name, [age, gender]]) {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}

const data = ["Alice", [30, "female"]];
display(data);  // Output: Name: Alice, Age: 30, Gender: female
