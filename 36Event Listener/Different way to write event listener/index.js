//2nd way
function sayHi(){
    console.log('hiiii');
}


// 3rd way
const btn = document.querySelector('button');
// 1
// btn.onclick = function click(){
//     alert("don't click on  button");
//     console.log('click');
// }

//2
// btn.addEventListener('click',sayHi());

//3
btn.addEventListener('click', function clck(){
    alert("click again");
    console.log('clicked');
    btn.innerHTML = "Don't clicked";
})

