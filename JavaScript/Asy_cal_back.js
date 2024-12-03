function loadScript(src, callback){
    var script = document.createElement('script');
    script.src = src;
    script.onload = function(){
        console.log('Loaded script with src: ' + src)
        callback();
    }
    document.body.appendChild(script);
}
function hello(){
    alert('hello')
}
function gd(){
    alert('Good morning');
}
loadScript|('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', hello)