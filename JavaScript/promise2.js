let p = new Promise((resolve, reject)=>{
    console.log('promise pending...')
    setTimeout(() => {
        console.log('I am promise and I am fulfilled')
         resolve(true)
       // reject(new Error('I am a promise and I am rej'))
    }, 5000)
})


let p1 = new Promise((resolve, reject)=>{
    console.log('promise pending...')
    setTimeout(() => {
        console.log('I am promise and I am fulfilled')
        // resolve(true)
        reject(new Error('I am a promise and I am rej'))
    }, 5000)
})

p1.then((value) => {
    console.log(value)
})

p1.catch((error) => {
    console.log('Some Error occured in p2')
})