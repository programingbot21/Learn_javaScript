function arrFun(arr){
    // let arr = 11;
    for( let i=0; i < arr.length; i++ ){
       console.log(arr[i])
  

    }
}
const num = [1,3,5,3,2]
arrFun(num)


//modifiy

function arrFun1(arr1){
    arr1.pop();
    arr1.push(12)
    
    arr1[0] = 100;
  
}

const number = [1, 2, 3, 4, 5]
arrFun1(number)
console.log(number)