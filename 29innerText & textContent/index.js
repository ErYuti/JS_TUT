//innerHTML
const para = document.querySelector('p');
console.log(para);
console.log(para.innerHTML);
const changePara = para.innerHTML = '<i>i am a good girl....</i>';
console.log(changePara);

//inntext
console.log(para.innerText);
const changePara1= para.innerText = '<b>i am a good girl!!!</b>';
console.log(changePara1);

//textContext
console.log(para.textContent);
const changePara2 = para.textContent = '<h3>this is text content ok</h3>';
console.log(changePara2);