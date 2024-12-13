// let db;
// const request = indexedDB.open("myDataBase")

// request.onupgradeneeded = e =>{
//    console.log('upgrade')

// }

// request.onsuccess = e =>{
//     console.log('On Succes')
// }

// request.onerror = e =>{
//    console.log('error')
// }

let req = indexedDB.open("myDataBase");
req.addEventListener('success', (e) => {
    console.log("Success")
    db = req.result;

})

req.addEventListener('error', (e) => {
    console.log("Error")
})

req.addEventListener('upgradeneeded', (e) => {
    console.log('Upgrade');
    db = req.result;
    console.log(db)
    db.createObjectStore("video", {keyPath: 'id'});
    db.createObjectStore('image', {keyPath: 'id'})
})