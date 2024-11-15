let input = document.querySelector('input');
let button = document.querySelector('#button');
let h2 = document.querySelector("#h2")
button.addEventListener("click" , 
function(){
    let result = eval(input.value);
    console.log(result);
    h2.innerHTML = result;
})