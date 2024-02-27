//selecting tags
const all_h1 = document.getElementsByTagName('h1');
const all_p = document.getElementsByTagName('p');
console.log(all_h1);
console.log(all_p);

//selecting img
const allImage = document.images;
console.log(allImage);

//selecting class
const className = document.getElementsByClassName('info');
console.log(className);

//selecting id
const idName = document.getElementById('left');
console.log(idName);

//querySelector - used for selecting anything in document
const select1 = document.querySelector('#left');
console.log(select1);
const select2 = document.querySelector('.info');
console.log(select2);
const select3 = document.querySelector('p');
console.log(select3);

//match all element -nodelist
const select4 = document.querySelectorAll('p');
console.log(select4);