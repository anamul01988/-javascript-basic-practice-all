let country = ["bang","ind", "srilan", "nepal"];
 country.forEach(myFunction);
 function myFunction(x){
    console.log(x)
 }
// console.log("another for each example: ",newArray);
// let countryArray [];
// countryArray.push(country);
// console.log(countryArray);

for( x of country){
    console.log("for of : ",x)
}
for( x in country){
    console.log("for in : ",x)
}
// const d = new Date();
// const dayToday = d.getDay();
// console.log(dayToday);
// const d = new Date();
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const outputt = days[d.getDay()];
// console.log(outputt);

const d = new Date();
 const dayToday = d.getDay();
// console.log(dayToday);
switch(dayToday){
    case 0:
        console.log("sunday")
        break;
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
         console.log("thursday")
         break;
    case 5:
         console.log("friday")
         break;
    case 6:
        console.log("saturday")
         break;
    default:
        console.log("wrong number")

}
var t1=20;
var t2=21;
var  t3=t1+t2+"2031"
console.log(t3)