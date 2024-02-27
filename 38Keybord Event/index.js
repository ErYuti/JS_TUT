const h1 = document.querySelector('h1');

// h1.addEventListener('keypress',function (e){
//     console.log(e);
// })


//keypress
window.addEventListener('keypress',function (e){
    console.log(e.code);
    console.log(e.key);
})


//keyup
window.addEventListener('keypup',function (e){
    console.log(e.code);
    console.log(e.key);
})

//keydown
window.addEventListener('keydown',function (e){
    console.log(e.code);
    console.log(e.key);
})