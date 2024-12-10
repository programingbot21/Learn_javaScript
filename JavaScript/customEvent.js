let custEv = new CustomEvent("userLoggedIn", {
    detail: {mess: 'hello', id:1}
})

function UserLoggedIn(e){
    console.log(`${e.detail.mess}`)
}

document.addEventListener("userLoggedIn", UserLoggedIn)

document.dispatchEvent(custEv)

// // Define the custom event and send data
// let customEvent = new CustomEvent("userLoggedIn", {
//     detail: { username: "JohnDoe", time: new Date() }
//   });
  
//   // Create the listener function
//   function onUserLoggedIn(event) {
//     console.log(`${event.detail.username} logged in at ${event.detail.time}`);
//   }
  
//   // Add the event listener
//   document.addEventListener("userLoggedIn", onUserLoggedIn);
  
//   // Simulate a login action by dispatching the custom event
//   document.dispatchEvent(customEvent);
  