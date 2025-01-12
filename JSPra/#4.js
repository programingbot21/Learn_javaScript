setTimeout(() => {
    console.log('Start')
},0)
Promise.resolve().then(() => console.log('Promise'))
console.log('End')