onmessage = function(e) {
    let res = 0;
    for(let i=0; i<10000000; i++){
        res += 1;
    }
    postMessage(res)
}