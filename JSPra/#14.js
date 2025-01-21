console.log(abc())
function abc(){
    console.log('abc')
}
abc()

function ab(){
    return function(){
        console.log("Rahu")
    }
}
ab()()
console.log(ab()())
