function fruitsIterator(values){
    let nextIndex = 0;

    return{
        next: function(){
            if(nextIndex < values.length){
                // we will return this object
                return{
                    value: values[nextIndex++],
                    done: false
                }
            }
            else{
                return{
                    done: true
                }
            }
        }
    }
}
const myArray = ['apples', 'Grapes', 'Orrange', 'Bhindi']
console.log("My Array is ", myArray)

const fruits = fruitsIterator(myArray)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)