const mainDiv = document.querySelector('div');
const h1 = document.querySelector('h1');
console.log(mainDiv);

//parent
console.log(mainDiv.parentElement);
console.log(mainDiv.parentElement.parentElement);
console.log(mainDiv.parentNode);

//sibling

console.log(mainDiv.nextElementSibling);
console.log(mainDiv.nextElementSibling.nextElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.nextElementSibling.nextElementSibling);
console.log(h1.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(h1.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(h1.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextSibling);

console.log(mainDiv.previousElementSibling);

console.log(h1.nextSibling);
console.log(mainDiv.previousSibling);

//chirden 
console.log(mainDiv.classList);
console.log(mainDiv.children);
console.log(mainDiv.childNodes);
console.log(mainDiv.childElementCount);
