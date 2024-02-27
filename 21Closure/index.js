//closure 

var sum = function(a){
    console.log("Live views: "+a);
    var c=4;
    return function (b){
        return a+b+c;

    }
}
var store = sum(2);//calling
console.log(store(5))


//ex2
var suM = function(a,b,c){
    return {
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}
var storevalue = suM(1,2,3);
console.log(storevalue.getSumTwo());
console.log(storevalue.getSumThree());
