async function haa() {
    let KolkataWheater = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("27 Deg")
        }, 1000)
    })
    let bangalore = new Promise((resolve, reject) =>{
        setTimeout(()=>{

            resolve("21 Deg")
        },2000)

    })
    // KolkataWheater.then(alert)
    // bangalore.then(alert)    
    console.log("Fetching Delhi Whether Please wait ...")
    let delhiW = await KolkataWheater
    console.log("Fetched delhi Wheater : " + delhiW)
    console.log("Fetching Delhi Whether Please wait ...")
    let bangaloreW = await bangalore
    console.log("Fetched delhi Wheater : " + bangaloreW)
    return [delhiW, bangaloreW]
    

}
// haa()

//Promise
console.log("Welcome to weather control ")
let a = haa()
a.then((value)=>{
    console.log(value)
})


// the await keyword makes js wait until //
// the promise settles and returns its value