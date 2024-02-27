//sync
const image = document.querySelector('img');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      image.src = json.message
    })
})

//async- browser code
setTimeout(() => {
  console.log('hiiiii');
})
       
//sync
//to block thread
// alert('hhhhh');

//block main thread
const btnn = document.querySelector('.btnn')

btnn.addEventListener('click', () => {
  const startTime = Date.now()
  let currentTime = startTime;
  while (startTime + 5000 > currentTime) {
    currentTime = Date.now()
  }
})
