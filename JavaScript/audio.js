// function Playmusic(){
//     const audio = new Audio("final-old-tobacco-road-228853.mp3")
//     const audio1 = new Audio("final-old-tobacco-road-228853.mp3")
//     const audio2 = new Audio("final-old-tobacco-road-228853.mp3")
 
//     audio.addEventListener('ended',function(){
//         audio1.play();
//     })
//     audio1.addEventListener('ended',function(){
//         audio2.play();
//     })
//    audio.play()
// }

let soundeffect = new Audio("final-old-tobacco-road-228853.mp3");
// Play the sound effect whenever the user clicks the mouse

document.addEventListener("click", () => {
soundeffect.cloneNode().play(); // Load and play the

});