const h1 = document.querySelector('h1');
let container = document.querySelector('.container');
const card = document.querySelector('.card');

for (let i = 2; i <= 20; i++) {
    const newCard = card.cloneNode();
    newCard.innerText = i;
    container.appendChild(newCard);
}
//copy path or give path
//remove element
const removeImg = document.querySelector("body > div > div:nth-child(4)");
removeImg.remove();

//only remove from file but present in cache memory
container.remove();
console.log(container);

//see- it is append again
console.log(document.body.appendChild(container));

// but when you set 
container.remove();
console.log(container);
console.log(container= null);
console.log(container);
