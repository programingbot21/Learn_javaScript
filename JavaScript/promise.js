let promise = new Promise(function(resolve, reject){
    alert('Hello')
    resolve(56)
})

console.log('Hello')

setTimeout(function() {
    console.log('Hello Two in 2 sec')
},2000)