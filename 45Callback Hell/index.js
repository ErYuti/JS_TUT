function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    callback(xhr.response)
  })
  xhr.open(method, url);
  xhr.send();

}

//callback hell
makeHttpRequest('GET', 'https://dummyjson.com/users', (usersdata) => {
  console.log(usersdata);
  // console.log(usersdata.users[0]);
  // console.log(usersdata.users[0].id);
  makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersdata.users[0].id}`, (postdata) => {
    console.log(postdata);
    // console.log(postdata.posts[0]);
    // console.log(postdata.posts[0].id);
    makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postdata.posts[0].id}`, (commentdata) => {
      console.log(commentdata);
      //  console.log(commentdata.comments);
      //  console.log(commentdata.comments[0].user);
      //  console.log(commentdata.comments[0].user.id);
      makeHttpRequest('GET', `https://dummyjson.com/users/${commentdata.comments[0].user.id}`, (userdata) => {
        console.log(userdata);
      })
    })
  })
})