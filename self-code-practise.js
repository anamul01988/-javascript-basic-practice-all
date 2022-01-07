var firstName = "anamul";
console.log(typeof(firstName));

// var x = 20;
var randomValue = console.log(Math.random()*100); 
// console.log(round(randomValue));
var x=10;
var y=20;
y = " "+y;
console.log(typeof(y)); 
console.log(y);

var sum=x+y;
console.log(sum); 
// output:10 20

var a=10;
var b=20;
var total=a+b;
console.log(total.toFixed(3));
console.log(typeof(total));
// 
var country="bangladesh is small country";
console.log(country.charAt(3));
console.log(country.indexOf("d"));
console.log(country.indexOf("small"));
console.log(country);
console.log(country.slice(3,5))
// slice space er por count kore nah tai 1m 3 ta ar gl er por 5 ta remove korce
console.log(country)
console.log(country.split());
var anotherCountry = " using concat";
 var addtext = console.log(country.concat(anotherCountry));
//  console.log(addtext)

var g=-30.20;
console.log(Math.round(g));
// round er khetre .50 ba tar beshi hole 1 show kobe ar kom hol 0
console.log(Math.ceil(g));
console.log(Math.floor(g));
var absoluteNumber = Math.abs(g);
console.log(absoluteNumber)
//abs er kaj positive result dewa
 var convertText = toString(g);

  console.log(typeof(convertText));

  var randomValue = Math.random();
   var convertNumber=parseInt(randomValue);
  console.log(convertNumber)
  var convertNumber=parseFloat(randomValue);
  console.log(convertNumber)

  var randomValue = Math.random()*100;
  var convertNumber=parseInt(randomValue);
  console.log(convertNumber)


  var randomValue = Math.random()*100;
  var convertNumber=parseFloat(randomValue);
  var fixedNumber =convertNumber.toFixed( 3)
  console.log(convertNumber);
  console.log(fixedNumber);


  var octal = 047;
  console.log(octal)
//   jehetu 3 ta value tar mane ati octal ar start 0 hotei hobe ..trpr 8 er nice thakte hobe
 
var hexa = 0849;
console.log(hexa)
//   jehetu 4 ta value ba bit tar mane ati hexa ar start 0 hotei hobe ..trpr 16 er nice thakte hobe
 
  
// var t= parseInt(prompt("enter first value:"));
// var s= parseInt(prompt("enter second value:"));
// var sum = t+s;
// console.log(sum)
// var input = prompt("enter the string:");
