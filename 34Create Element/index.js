const container = document.querySelector('.container');

//creating P element
const p = document.createElement('p');
console.log(p.innerText = 'yuti');
console.log(p.classList.add('my-para'));
console.log(document.body.appendChild(p));

//creating 12-divElement

for (let i = 1; i <= 12; i++) {
    //creating div element
    const divElement = document.createElement('div');
    //set inner text
    console.log(divElement.innerText = `${i}`);
    //giving class 
    console.log(divElement.classList.add('card'));
    //copy 
    console.log(container.appendChild(divElement));
}

//creating img
const myImg = document.createElement('img');
myImg.src = '';
myImg.alt = '';
console.log(container.appendChild(myImg));

//shortform
const container2 = document.createElement('div');
console.log(container2.classList.add('container2'));
console.log(document.body.append(container2));
for (let i = 1; i <= 5; i++) {
    const divElement2 = document.createElement('div');
    const myHTML = `
        <h1>hello</h1>
        <p>yuti meher</p>

    `
    divElement2.innerHTML = myHTML;
    console.log(container2.appendChild(divElement2));
}