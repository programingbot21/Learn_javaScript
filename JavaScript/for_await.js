async function *getsomeValue(){
    yield 7;
    yield 3;
    yield 8;
    yield Promise.resolve(4)

}

// for(const i of getsomeValue()){
//     console.log(i)
// }

(async() => {
    for await(const  i of getsomeValue()){
        console.log(i)
    }
})()