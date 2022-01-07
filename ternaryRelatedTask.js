var num = 25;
var firstName = "anamul"
if((num>=30 && firstName=='anamul')||(num<=30 && firstName=='anamul')){
    console.log("you can take vaccine." )
}
 else{
        console.log('you are not eligible .')
    }
(num>=30) ? console.log("in ternery, you can take vaccine") : console.log("in ternery , u are not eligible.");
 var result = (num<=30) ? console.log("in ternery, you can take vaccine") : console.log("in ternery , u are not eligible.")
 var result1 = (num<=30) ? ("in ternery, you can take vaccine") : ("in ternery , u are not eligible.")
 console.log("\n without console: "+result1)
 var check = "100"
 console.log((check >= 50)? ("greater than 50"):("less than 50"))
//
//
//
var selectedYear = 2020;
if((selectedYear%4==0 && selectedYear%100!=0)|| (selectedYear%400==0)){
    console.log("selected year is leap-year")
}
else{
    console.log("selected year is not leapyear.")
}


//now use ternery find even and odd number
var firstNumber = 51;
var find = ((firstNumber%2==0 && firstNumber/2!=0) || (firstNumber%2!=1))? ("even"):("odd")
console.log(find)
//another way
var find1 = (firstNumber%2==0 && firstNumber/2!=0)?("even"):(firstNumber%2!=1)? ("odd"): "odd";
console.log(find1)
