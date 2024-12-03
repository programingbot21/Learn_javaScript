const a = [1,9]
let arraylike = {
    
    [Symbol.isConcatSpreadable]: true
    };
   const res =  [3,2,4,a].concat(arraylike) 
   console.log(res)

