const best = " This my best interview";

function get(string){
    let word = 0;
    let wordArray = string.split(" ");
    let maxLength = 0;

    for(var i=0; i< wordArray.length; i++){
        if(wordArray[i].length > maxLength){
            word = wordArray[i];
            maxLength = wordArray[i].length;
        }
    }
    return word;
}
console.log(get(best))
console.log(get(best).length)
