//resloved
// async function makeReq1(){
   
// }
// makeReq()


//rejected
// async function makeReq(){
//     throw 'error'
// }
// makeReq()


async function makeReq(){
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
}
makeReq();