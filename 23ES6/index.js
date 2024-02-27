//function
function addNum(x,y) {
    return x+y;
}
const result = addNum(1,1);
console.log(result);

//Array
//ES6 rest combine resucive
function mul(a,b,c,...add){
    console.log(add)
    console.log(add[1])
    return a+b+c;
}
let r = mul(1,2,3,4,5,6,7);
console.log(r);

//ES6 spread(...) combine pass
var names=["yuti" , "jaee" ,"gauri", "moti"];
function getName(name1,name2){
    console.log(name1,name2);
}
getName(...names)
getName(names)

//Object
//rest
var student={
    name:"yuti",
    age:"20",
    hobbie:["travel", "read"]
}
// const age =student.age;
const {...rest} =student; 
console.log(rest);

//spred
var newStudent={
    ...student,
    age:"22"  //overwrite the value
}
console.log(newStudent)

//ES6
//arrow function
let addNumber=(m,n) => m+n;
const res = addNumber(1,1);
console.log(res);

//rest
let addNumb=(m,n,...other) => m+n;
const resl = addNumb(1,1,1,1,1);
console.log(resl);


