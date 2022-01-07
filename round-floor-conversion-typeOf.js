var text = "this is class two";
console.log(text);
var text1 = "this \t is class  'two'.I am making hw.";
console.log(text1);
var x=10;
var y=20;
console.log(x,y);
var x=y=z=20;
console.log(z);
console.log(x+y+z);
var className="two";
console.log("this is class", className, ". I am here for hw.");
//data type 
var check=" is it string or not?";
console.log(typeof check);
var check1=20;
console.log(typeof check1);
var check2=20.24;
console.log(typeof check2);
var check3=true;
console.log(typeof check3);
var check4 ;
console.log(typeof check4);
var check5=null;
console.log(typeof check5);
//using backward slesh
var name="anamul haque \\shanto \\. making hw.\n For class one , two and three.";
console.log(name);
var name1="i am anamul haque shanto";
// of er o ta capital a howa lagbe
console.log(name1.indexOf('haque')); 
console.log(name1 .split(' '));
console.log(name1 .split('anamul shanto'));
console.log(name1 .split('shanto'));
//math 
var firstNumber=10;
var secondNumber= 20;
var sum=firstNumber+secondNumber;
console.log(sum);


var firstNumber=10.40;
var secondNumber= 50.50;
var sum=firstNumber+secondNumber;
console.log(parseInt(sum));



var firstNumber=100.44;
var secondNumber= 50.50;
var sum=firstNumber+secondNumber;
console.log(parseFloat(sum));

var firstNumber=500.445678;
var secondNumber= 100.506678;
var sum=firstNumber+secondNumber;
console.log(sum.toFixed(3));

// round er khetre .50 ba tar beshi hole 1 count korbe
var firstNumber=10.50;
var secondNumber= 50.20;
var sum=firstNumber+secondNumber;
console.log(Math.round(sum));

// floor er khetre .20ba 50 ba jai hok . er por gula count korbe nah 
var firstNumber=10.50;
var secondNumber= 50.20;
var sum=firstNumber+secondNumber;
console.log(Math.floor(sum));

// ceil er khetre .20ba 50 ba jai hok . er por gula .1 count korbe 
var firstNumber=10.10;
var secondNumber= 50.20;
var sum=firstNumber+secondNumber;
console.log(Math.ceil(sum));

// random er khetre output diff hoye ashbe
var firstNumber=10.10;
var secondNumber= 50.20;
var sum=firstNumber+secondNumber;
console.log(Math.random()*100);

//octal to decimel
var octal=034;
console.log(octal)


//hexadecimel to decimal
var hexaValue=0354;
console.log(hexaValue);
