function makeHttpRequest(method, url,) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  //creating promise

  const prom = new Promise((resolve, reject) => {
    xhr.addEventListener('load', () => {
      resolve(xhr.response)
    })
  })

  xhr.open(method, url);
  xhr.send();

  return prom;
}
//fix using promise

// makeHttpRequest('GET', 'https://dummyjson.com/users')
//   .then((usersdata) => {
//     console.log(usersdata);
//     console.log(usersdata.users[0]);
//     console.log(usersdata.users[0].id);
//     return makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersdata.users[0].id}`)
//   }).then((postdata) => {
//     console.log(postdata);
//     console.log(postdata.posts[0]);
//     console.log(postdata.posts[0].id);
//     return makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postdata.posts[0].id}`)
//   }).then((commentdata) => {
//     console.log(commentdata);
//     console.log(commentdata.comments[0].user);
//     console.log(commentdata.comments[0].user.id);
//     return makeHttpRequest('GET', `https://dummyjson.com/users/${commentdata.comments[0].user.id}`)
//   }).then((userdata) => {
//     console.log(userdata);
//   })

//same single line return
makeHttpRequest('GET', 'https://dummyjson.com/users')
  .then((usersdata) => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersdata.users[0].id}`))
  .then((postdata) => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postdata.posts[0].id}`))
  .then((commentdata) => makeHttpRequest('GET', `https://dummyjson.com/users/${commentdata.comments[0].user.id}`))
  .then((userdata) => console.log(userdata));