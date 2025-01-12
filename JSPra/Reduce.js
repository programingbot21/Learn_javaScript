const arr = ['apple', 'orange', 'banana']

const count = arr.reduce((acc, cur) => {
    if(acc[cur]){
        acc[cur] += 1
    }else{
        acc[cur] = 1
    }
    return acc
}, [])
console.log(count)