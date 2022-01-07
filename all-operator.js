//arithmetic operator(+,-,*,/,%,++,--)
// logical operator (&&,||)
// assignment or string operator(=,+=,-=,/=,*=,%=)
//comparison operator (==,===,!=,!==,<=,>=)
//conditional opearator (if,else,elseif,switch,ternary operator)
//bitwise operator(&,<<,>>,~,^)
var i=3;
var j=4;
var k=i+=3;
// i=i+3;
var l=j-=5;
console.log("assignment operator += value is : "+k);
console.log("assignment operator -= value is : "+l);

var a=10;
var b=20;
var div = a/b;
var div1 = b/a;
console.log(div)
console.log(div1)
var div2 = a%b;
var div3 = b%a;
console.log(div2)
console.log(div3)
var x=5;
var y=7;
var z=x%y;
console.log("z: "+z);
//5/7 vagsesh 5 e pacci
console.log("present value of x: "+x);
console.log("present value of x: "+y);

var increment = ++x;
console.log(increment);
var decrement = y--;
console.log("decrement unchanged: " +decrement);
var decrement = --y;
console.log("decrement changed: " +decrement);

console.log("check x,y value equl or not: "+ x==y);
console.log("check x,y value equl or not: "+ x===y);
///=== will compare datatype or openand 
console.log(x!=y);
console.log(x<=y);
console.log(x>=y);

if(x<=20){
    console.log("x is less than 20.");
}
else{
    console.log("x is greater than 20.");
}
if(y%2==0){
    console.log("y is even number");
}
else{
    console.log("y is odd number");
}
var e=9;
var r="string";
console.log("input of e and r: \n"+e+"\n"+r);
console.log(e!==r)

//grade system::
var grade = 67;
if(grade>=33 && grade<=39){
    console.log("your grade is D");
}
else if(grade>=40 && grade<=49){
    console.log("your grade is c");
}
else if(grade>=50 && grade<=59){
    console.log("your grade is B");
}
else if(grade>=60 && grade<=69){
    console.log("your grade is A-");
}
else if(grade>=70 && grade<=79){
    console.log("your grade is A");
}
else if(grade>=80 && grade<=89){
    console.log("your grade is A+");
}
else if(grade>=90 && grade<=100){
    console.log("your grade is Golden");
}
else{
    console.log("your grade is Fail")
}
