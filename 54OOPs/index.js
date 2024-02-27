//four pillars of object oriented pragramming -

// Abstration
const user1 = {
    name: 'yuti',
    surname: 'meher',
    age: 22,
}

function getAgeYear(age) {
    return new Date().getFullYear() - age
}
console.log(getAgeYear(user1.age));







//Encapsulation 
//Encapsulation is also known as a data heading 
const user2 = {
    name: 'gauri',
    surname: 'naik',
    age: 13,
    getAgeYear: function () {
        return new Date().getFullYear() - user2.age
    },
}

console.log(user2.getAgeYear());





//factory function
function createUser(name,surname,age) {
    const user = {
        //when value and key same then is works
        name,
        surname,
        age,
        //this is also written
        getAgeYear() {
            return new Date().getFullYear() - user.age
        },
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