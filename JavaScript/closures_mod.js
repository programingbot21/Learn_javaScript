function create(){
    let count = 0;
    return {
        increment(){
            count++;
            console.log(count)
        },
        getcount(){
            return count
        }
    }
}
 export {create}

