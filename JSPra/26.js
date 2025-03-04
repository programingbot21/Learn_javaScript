

// const URL = 'https://jsonplaceholder.typicode.com/users'
// async function getdata(){
//     const res = await fetch(URL);
//     const data  =  await res.json();
//     console.log(data)
// }
// getdata()

// const url = fetch('https://dummyjson.com/products?sortBy=title&order=asc')
// async function getda(){
//     const res =await url;
//     const dat = await res.json();
//     console.log(dat);

// }

// getda()


fetch('https://dummyjson.com/products?sortBy=title&order=asc')
.then(res => res.json())
// .then(data => console.log(data))
.then((actu) => {
    // console.log(actu)
    // console.log(actu.products[12])
    // console.log(actu.products[12].brand )

    // const da = actu.products[12].brand

    // document.getElementById('data').innerHTML = da;

}).catch((error) => {
    console.log(error)
})




fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    // console.log(data)
    data.forEach(ele => {
        console.log(ele.email);
       
    })

    data.forEach(ele1 => {
        console.log(ele1.name)

    
        
    })
  
})
.catch((error) => {
    console.log(`error ${error}`);


})