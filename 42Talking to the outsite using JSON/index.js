// const user ={
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }
// console.log(user);

//how to access data 
// fetch('https://jsonplaceholder.typicode.com/todos/1')

const image = document.querySelector('img');
const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => {
        image.src = json.message
      })
})
