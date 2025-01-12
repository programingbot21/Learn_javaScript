// message = "Good Global"
// function hello(){
//     // let message = " Good Morning"
//     {
//         // let message = 'Good Aftton'
//         console.log(message)
//     }
// }
// hello()

// message = "Good Global"
 //function init(){
//      let message = " Good Morning"
//     {
//          let message = 'Good Aftton'
//         console.log(message)
//     }
//     let c = function hello1(){
//         console.log("I am c")
//     }
//     return c
// }
// c=hello()
// c()

const x = () => {
    let a = 1
    console.log(a)
    const y = () => {
        let a = 2
        console.log(a)
        const z = () =>{ 
         let a = 4
         console.log(a)
        }
        z()
    }
    y()
}
x()

