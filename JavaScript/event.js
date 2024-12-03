// const pho = document.getElementById('pho');

// pho.onclick = () =>{
//    let a = 5;
//    a++;
//    console.log(a)
// }

// const  di = document.querySelector('div')
// di.onmouseover = () =>{
//     console.log('Yor are beauty')
// }

pho.addEventListener("click", (e) => {
    console.log('btuuon')
    console.log(e)
    console.log(e.type)
})

pho.removeEventListener("click", (e) => {
    console.log('btuuon')
    console.log(e)
    console.log(e.type)
})

// Create an event object
const applyUpdateEvent = new Event('applyUpdate');

// Listen for the custom event
pho.addEventListener('applyUpdate', (event) => {
  console.log('applyUpdate event triggered');
  // Handle the update logic here
});

// Dispatch the custom event when needed
function triggerUpdate() {
  console.log('Updating...');
  document.dispatchEvent(applyUpdateEvent);
}

// Example usage:
triggerUpdate();

