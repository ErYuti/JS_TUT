//to handing the error
// try{
//     console.log(a);
// } catch(err){
//     console.log(err);
//     console.log(typeof err);
//     console.dir(err);
//     console.dir(err.message);
//     console.dir(err.name);
// }finally{
//     console.log('hello');
// }
// console.log(3+4);

//asyc function using try and catch block
async function makeReq() {
    try {
        const url = 'https://dog.ceo/pi/breeds/image/random';
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
console.log('hey');
makeReq();
console.log(34+34);