var lordify = regularPerson => {
    console.log(`${regularPerson.fname} of can`);

}

var regularPerson = {
    fname: 'bill',
    lname: 'Wilson'
}
lordify(regularPerson)