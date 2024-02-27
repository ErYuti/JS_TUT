//fecth is a promise
const f = fetch('https://dummyjson.com/products');
console.log(f);



//fetch reslove -'GET'
fetch('https://dummyjson.com/products')
.then((res)=> res.json())
.then((data)=> console.log(data))



//fetch reslove -'POST'
// It will simulate a POST request and will return the new created product with a new id
fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log);



// It will simulate a PUT/PATCH request and will return the product with modified data
/* updating title of product with id 1 */
fetch('https://dummyjson.com/products/1', {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'iPhone Galaxy +1'
  })
})
.then(res => res.json())
.then(console.log);