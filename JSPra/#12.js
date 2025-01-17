var a = "Ram has arrive";

function abc(a){
    let newSte = a.split(' ');
    return newSte.reduce((e1,e2) => (e1.length> e2.length)?e1:e2)
}
console.log(abc(a))