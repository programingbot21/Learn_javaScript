var lord = function(name, land){
    if(!name){
        throw new Error('A first name required')
    }

    if(!land){
        throw new Error('A Land ir reqried')
    }

    return `${name} of ${land}`
}

console.log(lord('john','usa'));

//console.log(lord('Petter')); // A Land ir reqried


// new version

var loo = (name1, add)=> {
    if(!name1)
{
    throw new Error('Name is requried')
}

    if(!add){
        throw new Error('Address is req')
    }

    return `${name1} of ${add}`
}

console.log(loo('PetterJohn', 'Canada'));