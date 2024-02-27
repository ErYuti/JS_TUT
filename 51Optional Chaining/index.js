const user ={
    firstName:'yuti',
    lastName:'meher',
    age:22,
    getName:function(){
        return user.firstName+''+ user.lastName
    },
}
console.log(user.firstName);
console.log(user.address);

// console.log(user.address.city && user.address.city);
//optional chaining
console.log(user.address?.city);
console.log(user.address?.['city']);

const a= 'yuti';
console.log(user?.[a]);

function getName(){
    console.log('yuri meher');
}
console.log(user.getName?.());