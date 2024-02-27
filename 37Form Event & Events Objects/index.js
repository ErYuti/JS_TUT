const userinput = document.querySelector('.userinput');
const form = document.querySelector('form');
const para =document.querySelector('p');

//input event
// userinput.addEventListener('input',function(e){
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     para.innerHTML = e.target.value;
//     // console.log('input event fired');
// })


//change event
// userinput.addEventListener('change',function(e){
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     para.innerHTML = e.target.value;
//     // console.log('input event fired');
// })


//focus event
// userinput.addEventListener('focus',function(e){
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     para.innerHTML = e.target.value;
//     // console.log('input event fired');
// })


//focus event
userinput.addEventListener('blur',function(e){
    console.log(e.target.value);
    inputValue = e.target.value;
    para.innerHTML = e.target.value;
    // console.log('input event fired');
})

// when click on button eventListener
form.addEventListener('submit', function clk(e){
    e.defaultPrevented();
    const myForm = new FormData(form);
    console.log(myForm);
})

