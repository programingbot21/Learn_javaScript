const arr = ["neha", "Khushi", "Nidi", "Ashu"];
let index = 0;


//  document.getElementById('show').addEventListener('click', function(){
//     document.getElementById('insert').innerHTML = arr[index];
//     // index++;

//     index = (index+1)%arr.length
//  })


 document.getElementById('show').addEventListener('click', function(){
    document.getElementById('insert').innerHTML = arr[index]

    index =  (index+1)%arr.length
 })