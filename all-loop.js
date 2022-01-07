// for loop(for in and for of) aikhane in index, object ,string niye kaj korbe ar of string aray er value ba item show korve

// while loop 
// do while loop
// foreach loop(array method ba function)
// for(var i=0; i<=3;i++){
//     console.log("anamul")

// }
for(var i=0; i<10;i++){
    console.log((i+1)+" adding one")

}
console.log("\n")

var names = "anamul"
console.log(names)
  
for(var i=0; i<3;i++){
    console.log("anamul")

}
console.log("\n starting while loop :")
var arr = ["anamul haqie shanto ","shanto", "rakib"]
// var arr = new Array(3)
 // aivabe arr create kore ,length newa jay .aita user theke input nite use hoy beshi
var i=0;
while(i<=arr.length){
    // console.log(" using while loop")
    console.log(arr[i])
    i++;
}
console.log("end while loop")
console.log(" start do while loop")
var i=0;
do{
    console.log(i+" do while")
    i+=3;
    // i=i+3
}while(i<=10)

console.log("end do while loop")
console.log("aikhane conditon vul dileo counter value ba initilize value ta print korbe. jemon")
var i = false;
do{
    console.log("it will be print ")
   
}
while(i)
console.log("start object....")
var student = {
    stuName:"anammul",
    age:33,
    // profession:{
    //     prof1:"developer",
    //     prof2:"engineer",
    //     prof3:"designer",
    // }

}
console.log(student)
student["location"] = "dhaka";
console.log(student)

// console.log(student +"added property with value") --->aita kaj kore nah kno bujhlam nah
var student = {
    stuName:"anammul",
    age:33,
    profession:{
        prof1:"developer",
        prof2:"engineer",
        prof3:"designer",
    },
    religion:"islam",

}
console.log(student["profession"].prof1);
//another way.......
console.log(student.profession["prof2"])
console.log(student.profession.prof2 + " --> another way of showing prof2 er value")

console.log(" \n end  object....")

console.log("start for loop ,,for in and for of ")
var names = "anamul haque shanto";
for(var x in names){
    console.log("index "+ x +" value: " + names[x]);
}
console.log("\n")
for(var x in student){
    console.log("index "+ x +" value: " + student[x]);
}
console.log("\n")//end for in............




for(var x of names){
    console.log("using for of and getting item or value: "+ x)
}
var contries = ["banglaseh", "india", "srilanka", "Nepal", "canada"];
for(var x of contries){
    console.log("\n using for of and getting value or item: "+ x)
}
var student = {
    stuName:"anammul",
    age:33,
    profession:{
        prof1:"developer",
        prof2:"engineer",
        prof3:"designer",
    }

}
// for(var x of student){
//     console.log("\n using for of and getting value or item: "+ x)
// } 
// it will not allow object cause of will consider item or value not indext .hence in object , there has property
// so it will not work

//============================================  Modern javascript es6 variables  ====================================================
var names = "anamul haque shanto";
var age = 22;
var nationnality = "bangladeshi";
var back = `backtracking sign ta hocce ekdom left a tap er uporer ta`;
console.log(`anamul haque 
shanto`)
console.log(back + " -- > ati diye line break kora jay without backslash n use kore")
// console.log(${back}ati diye line break kora jay without backslash n use kore)  --> ai line ta kaj korbe nah cause variable value `` backtraking diye niyeci
console.log(`sudent name is : ${names} and age is :${age} .
Additionally nationallity is ${nationnality} .`); //concatination use e kora lage nai sudhi line break korlei hoy.
 
var a = 5;
var b = 3;
console.log(`${a} + ${b} = ${a+b}`);
console.log("ekhn dekhbo difference between es6 and normal js code")
var names = "anamul haque shanto";
for(var x in names){
    console.log("index "+ x +" value: " + names[x]);
}
console.log("\n")
for(var x in names){
    console.log(`\n index ${x} value: ${names[x]}`)
}
console.log(`\n ${a}^${b} = ${a**b}`)

// ...........................now increment and decrement...............................
var a = 5;
var b = 10;
var c,d;
c = a++;
d = ++b;
console.log(c)//a  post decrement a ge operand print korbe then increment jodi loop calaitam tahole kaj korto
console.log(d)//pre increment kaj korbe karon 1 add hobe then operand print korbe
console.log("\n")
var a = 5;
var b = 10;
var c,d;
c = a--;
d = --b;
console.log(c)// post decrement a age operand print korbe then decrement jodi loop calaitam tahole kaj korto
console.log(d +"\n")//pre decrementr kaj korbe karon 1 add hobe then operand print korbe
//======================== now using break and continue ==================================
console.log("using break: ")
for(let i = 1; i<=10; i++){
    if(i==5){
        break;
    }
    console.log(i)
}
console.log(" \n using continue: \n")
for(let i = 1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i)
}

const value = 3.1416;
// const value = 4.14; --->change possible nah
console.log(value)
const habbi = ["first-wife","second-wife","third-wife"];
habbi[1] = "fifth-wife";
console.log(habbi) 
//const diye obj o update kora jay tobe variable change kora jay nah===========
const habbi1 = {names:"shanto",phn_no:0182}
console.log(habbi1)
// habbi1.names:"anamul"
console.log(`after change: ${habbi1.names}`)