function logActivity(name="Shane McConkey", activity="skiing"){
    console.log(`${name} lovew ${activity}`);
}
logActivity();


var defaultPerson = {
    names: {
        first: "Shane",
        last: "mcConkey"
    },
    favActivity: "skinig"
}
function logAct(p=defaultPerson){
    console.log(`${p.names.first} loves ${p.favActivity}`) ;
}
logAct();