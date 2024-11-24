function print(value){
    if(value === undefined){
        console.log('No value provide')
    }else if(value === null){
        console.log('Value is null')
    }else {
        console.log('value', value)
    }
}
print()
print(null)
print('Hello')

