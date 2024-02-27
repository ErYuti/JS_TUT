//selecting
const att = document.querySelector('.class');
console.log(att);

// selecting
const att1 = document.querySelector('p').getAttribute('class');
console.log(att1);

//selecting attribute
const att2 = document.querySelector('img').getAttribute('src');
console.log(att2);

//set attribute
const setAtt = document.querySelector('h1').setAttribute('title', 'hello yuti');
console.log(setAtt);
const getAtt =document.querySelector('h1').getAttribute('title');
console.log(getAtt);

//pracs set attribute
const setAttId = document.querySelector('h1').setAttribute('id', 'heading');
const getAttId=document.querySelector('h1').getAttribute('id');
console.log(getAttId);

//change id attribute using id directly
//.href also
const changeId = document.querySelector('h1').id = 'hello';
console.log(changeId);
