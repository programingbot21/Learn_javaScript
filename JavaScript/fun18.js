//higer order function
//A higher-order function is a function that operates on functions, taking
//one or more functions as arguments and returning a new function. Here
//is an example:

function add(att,b,tn ){
    let res = att + b;
       tn(res);

       return () => console.log(res)
}

add(2,4, function (val) {
  console.log(val)
})

add(2,4, (val) => console.log(val))
add(4000 , 50, (res) => console.log(res))

let resFunction = add(3,5, () => {})
resFunction()