let ee = document.querySelector(".box");
let ee2 = document.querySelector(".box2");

ee.addEventListener("click", function (e) {
    // e.stopPropagation()
    console.log('Box Outer')
});

ee2.addEventListener('click', function (s) {
    // s.stopPropagation()
    // s.stopImmediatePropagation()
    console.log('Box 2')
})
ee2.addEventListener('click', function (s) {
    s.stopPropagation()
    // s.stopImmediatePropagation()
    console.log('Box 265')
})