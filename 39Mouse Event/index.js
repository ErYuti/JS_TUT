//click
//clickdb

const h1 =document.querySelector('h1');

//mousedown
h1.addEventListener('mousedown',function (e){
    console.log(h1.style.background = 'green');
    console.log('mousedown');
    console.log(e);
})

 //mouseup
h1.addEventListener('mouseup',function (e){
    console.log(h1.style.background = 'orange');
    console.log('mouseup');
    console.log(e);
})

//mouseenter
h1.addEventListener('mouseenter',function (e){
    console.log(h1.style.background = 'yellow');
    console.log('mouseenter');
    console.log(e);
})

//mouseleave
h1.addEventListener('mouseleave',function (e){
    console.log(h1.style.background = 'red');
    console.log('mouseleave');
    console.log(e);
})

//mouseout
h1.addEventListener('mouseout',function (e){
    console.log(h1.style.color = 'red');
    console.log('mouseout');
    console.log(e);
})

//mouseover
h1.addEventListener('mouseover',function (e){
    console.log(h1.style.color = 'green');
    console.log('mouseover');
    console.log(e);
})

//mousemove
h1.addEventListener('mousemove',function (e){
    console.log(h1.innerHTML = 'yutiiii');
    console.log('mousemove');
    console.log(e);
})

//wheel
h1.addEventListener('wheel',function (e){
    console.log(h1.innerHTML = 'wheel');
    console.log('wheel');
    console.log(e);
})

//drag
//touchmove
//pointer
