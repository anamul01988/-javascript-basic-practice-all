// / * boolean 
// Number
// String
// undefined
// null
// Symbol
// var name="anamul";
// var name1="haquee";
// console.log(name==name1);
/*re = /^([a-zA-z0-9]\.?)+^\.]@([a-zA-z0-9]\.?)+[^\.]$/;
str = "anamul@gmail.";
console.log(re.test());
console.log(str+"com")
*/
// document.write(re.test(str));
re = /^([a-zA-z0-9]\.?)+^([a-zA-z0-9]\.?)/;
str = "anamul@gmail.";
console.log(re)
console.log(re.test(str));
console.log(str+"com")

re = /^anamul/;
str = "anamul@gmail.";
console.log(re)
console.log(re.test(str));
console.log(str+"com")