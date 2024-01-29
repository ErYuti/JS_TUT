//Async JS
//callbacks,Promises,Async & Await

//Data
const datas = [{ name: "yuti", profession: "enginner", },
{ name: "jaee", profession: "makeupartist", }
];


function getDatas(){
    setTimeout(() => {
        let output="";
        datas.forEach((datas,index) =>
        output +=<li>Dat.</li>
        )
    }, 1000);
}
getDatas();