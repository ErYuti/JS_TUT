const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');
const body = document.querySelector('body')
//when you click on the blue or pink than only green  print this is called event bubbling
//for stop event bubbling -stopPropagation()
//for event capturing - true pass
window.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('1. window event lister');
}, true)

document.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('2. document event lister');
}, )

body.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('3. body event lister');
},)

green.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('4. green event lister');
},)

pink.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('5. pink event lister');
}, )

blue.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('6. blue event lister');
},)