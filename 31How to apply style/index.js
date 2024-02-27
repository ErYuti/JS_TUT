//selecting
const heading1 = document.querySelector('h1');
console.log(heading1);

//checking style properties in js
const h1_style = heading1.style;
console.log(h1_style);

//change styling using js
const changeh1 = heading1.style.color = 'hotpink';
console.log(changeh1);
heading1.style.background = 'black';
heading1.style.background = 'black';

// change all a tag 
const alllink = document.querySelectorAll('a');
console.log(alllink);

// alllink[0].style.color = 'orange';
// alllink[1].style.color = 'pink';


//using for loop
// for (let i=0; i<alllink.length; i++){
//     alllink[i].style.color ='red';
// }


//using for of
for (let link of alllink){
    // link.style.color = 'green';
    // link.style.textDecoration ='none';
    // link.style.fontSize = '20px';
    // link.style.fontWeight = '700';
    // link.style.background = 'yellow';

    //other way
    link.style.cssText =`
    color : green;
    text-decoration :none;
    font-size: 20px;
    font-weight: 700;
    background-color: yellow;
    `
}

// link.classList.add ('green-list')
// link.classList.remove ('')
// link.classList.toggle ('')
