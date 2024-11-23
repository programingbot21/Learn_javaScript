//const button = document.getElementById('btn')

// button.addEventListener("click", function(){
//     alert('Hello')
// })

//button.addEventListener("click", Add)

function Add(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 =  parseFloat(document.getElementById('num2').value);

 


    const result = num1 + num2;
    document.getElementById('res').textContent = `Resut : ${result}`
}

document.getElementById('btn').addEventListener('click', Add)

