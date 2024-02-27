
const image = document.querySelector('img');
const btn = document.querySelector('button');


//XMLHttp
// console.log(XMLHttpRequest);

//can't call without new keyword
// console.log(XMLHttpRequest());

// with new keyword
// console.log(new XMLHttpRequest());


btn.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.responseType ='json';
    // xhr.addEventListener('load', ()=>{
    //   // console.log(JSON.parse(xhr.response));
    //   console.log(xhr.response);
    //   image.src = xhr.response.message;
    // })

    xhr.onload =()=>{
      image.src = xhr.response.message;
      console.log(xhr);
    }

    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xhr.send();

})

