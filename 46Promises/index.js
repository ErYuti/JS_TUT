//promises are special type of object

//create promise -pending
const a = new Promise(()=>{})
console.log(a);

//fulfilled
const b = new Promise((resolve,reject)=>{
    resolve({name: 'yuti'});
})
console.log(b);

//reject
const c = new Promise((resolve,reject)=>{
    reject('promise rejected');
})
console.log(c);

//promises pending relove reject
const resolvebtn = document.querySelector('.resolve')
const rejectebtn = document.querySelector('.reject')


const p = new Promise((resolve, reject) => {
    resolvebtn.addEventListener('click', () => {
        resolve('promise resolved')
    })
    rejectebtn.addEventListener('click', () => {
        reject('promise rejected')
    })
})
//method in promises
p.then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('finally');
    });