let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', () => {
     const workerobj = new Worker("web_worker.js")
     workerobj.postMessage("start worker")
     workerobj.onmessage = function(e){
        
         document.querySelector('#output').innerHTML = e.data;
     
    }

})

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    document.querySelector('#hi').innerHTML += 'hi'
})