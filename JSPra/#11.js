// const str = (""+1)
// console.log(str)
// console.log(""+1)
// console.log("2"/4)

function mergeTwo(s1,s2){
    let s3='';
    let l1=s1.length;
    let l2 = s2.length;
    let j=0, k=0;
    for(let i=0; i<l1+l2; i++){
        if(j<l1){
            s3+=s1[i];;
            j++
        }
        if(k<l2){
            s3+=s2[i];
            k++;
        }
    }
    return s3
}
console.log(mergeTwo('raohit', 'panit'));