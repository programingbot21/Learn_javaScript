// var obj={
//     name:'gsdfy',
//     namme1:'tdjf',
//     func: function(){
//         var self = this;
//         console.log(`${this.name}`) 
//         console.log(this.name) 
//         (function(){
//             console.log(this.name)
//             console.log(self.name)
//         }())
//     }
// }
// obj.func()
//  console.log(obj.name)


// function createTimer() {
//     let count = 0;

//     setInterval(function() {
//         count++;
//         console.log(count);
//     }, 1000);
// }

// createTimer();

let name  = 'Ritik'

// function rev(name){
    
//     let arr = name.split('').reverse().join('')

//     return arr
// }
// console.log(rev(name))


function rev(name){
    let str = '';
    for(let i=name.length-1; i>=0; i--){
     str+= name[i];}
     return str
}
console.log(rev(name))

let name1 = [1,4,7,9]
console.log(name1.reverse())