const h1 =document.querySelector('h1');
const container = document.querySelector('.container');
const card = document.querySelector('.card');

//cut paste
container.appendChild(h1);

//copy
console.log(h1.cloneNode()); //normal
console.log(h1.cloneNode(true)); //deep

container.appendChild(h1.cloneNode(true));//copy refrecence
container.appendChild(card.cloneNode(true));

//for loop

// for (let i=2; i<= 100; i++){
//     const newCard = card.cloneNode();
//     newCard.innerText = i;
//     container.appendChild(newCard);
// }

//append
//but append return undefined
console.log(container.append('hello'));
console.log(container.append('hello', h1, 'world', 'yuti'));

