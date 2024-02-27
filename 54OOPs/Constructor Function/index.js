// drawback in factory function for that used 

function getAgeYear() {
    return new Date().getFullYear() - this.age
}
function createUser(name,surname,age) {
    const user = {
        //when value and key same then is works
        name,
        surname,
        age,
        getAgeYear
    }
    return user;
}

//person1
const person1 = createUser('jaee','raut',34)
console.log(person1);
console.log(person1.getAgeYear());


//person2
const person2 = createUser('shweta','patil',22)
console.log(person2);
console.log(person2.getAgeYear());




//
function createNum(num1,num2,age){
    this.num1 = num1
    this.num2 = num2
    this.age = age

}
console.log(new createNum());
console.log(new createNum(2));
console.log(new createNum(2,4));

createNum.prototype.getAgeYear = function(){
    return new Date().getFullYear().this.age
}
createNum.prototype.getAgeYear = function(){
    return new Date().getFullYear().this.num1
}

