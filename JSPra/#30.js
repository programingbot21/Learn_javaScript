const arr =  "Bangalore college of engineering and technology";

const obj = {};
for(let r of arr){
    if(obj[r]){
        obj[r] += 1;

    }else{
        obj[r] = 1
    }
}
console.log(obj)