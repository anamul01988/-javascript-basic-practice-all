//buit in function(console,alert,date)
//user defined function
const date = new Date();
console.log(date);
const getdate = date.getDay();
console.log(getdate);

function add(){
    const a = 10;
    const b= 10;
    console.log( "after sum we get1: ",a+b);
}

 add();

 function add1(a,b, c = 10){ //default value niye nite pari

    console.log( "after sum we get2: ",a+b);
}
 add1(10,20);

 function sum(a,b){
     console.log("after sum we get3: ",a+b);
 }
 sum(20,20);

 function sum1(a,b){
    console.log(`after addition of ${a }+ ${b} we can get ${a+b}.`);
}
 sum1(20,20);

 function concatString(fname = "anamul", lname = "haque"){
     console.log(`my name is ${fname} ${lname}`);
 }
 concatString();

 function concatString1(fname = "anamul", lname = "haque"){ //perameter
    console.log(`my name is ${fname} ${lname}`);
}
concatString1(`akramul`, "haque"); //arguments 
// double quote , singke quote , even backtracking jekono ekta use korei paramter value change korte pari

function adder(a = 5, b = 5){
    return a+b;
}
const result = adder();
console.log(result)

function adder1(a = 5, b = 5){
    console.log("resut is :",a+b)
}
 adder1();

//==================== array in function ============
let array1 = [10,20,50];
let array2 = [10,30,50];
let array3 = [10,40,50];
function sumOfArray(array){
    let sum = 0;
    let arrLength = array.length;
    for(let i = 0; i<arrLength; i++){
        sum+=array[i];
    }
    // console.log(array.length)
    console.log(sum)
}
sumOfArray(array1);
sumOfArray(array2);
sumOfArray(array3);

//===== arguments is one kinds of built in  object of  js === ====
function sumOfArray(){
    console.log(arguments);
}
sumOfArray(10,20,30,40)

function sumOfArray(){
    console.log(arguments);
}
sumOfArray(10,20,30,40)

console.log("\n starting map: ")

//now mapping
let country = ["bang","us","pak","nepal"];
function mapFunction(item){
    return item;
}
let mapArray = country.map(mapFunction)
console.log(mapArray);

let numSet = [10,20,30,40];
let mapFunction2 = function(item2){
    return item2*item2;
}
let resultOfMap = numSet.map(mapFunction2);
console.log(resultOfMap);
//object method
console.log("\n starting object method: ")
let stuName = {
    firstName : "anamul",
    lastName : "haque",
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(stuName.fullName);
console.log(stuName.firstName)
console.log(stuName.fullName());


console.log("\n starting scope: ");
var globalName = "anamul haque";
let v = 3;
const b = 30;
console.log(`global scope : ${globalName} ${v} ${b}`)

//local scope
function localScopeText(){
    var a =5;
    let b =4;
    const c = 34;
    console.log(`local scope ${a} ,${b} , ${c}`)

}
localScopeText();

if(true){ //false dile ashbe nah karon block a dhukbe nah 
    let a = 7;
    let b = 8;
    const c = 9;
    console.log(`local scope : ${a}, ${b} , ${c}`)

}
for(let a = 0; a<=5; a++){
    console.log(a);
}
// console.log(`local scope : ${a}, ${b} ,${c}`)