// const foo = () =>{
//     console.log(this.name)
// }
// foo.call({name: 'Ranu'}) // undefined

const foo = function(){
    console.log(this.name)
}
foo.call({name: 'Ranu'})