var stuId=[10,20,30,40, "rahim"]
console.log(stuId[0])
var position = stuId.indexOf(30)
console.log(position)
var position1 = stuId.lastIndexOf(30)
console.log(position1)
var position2 = stuId.indexOf(100)
console.log(position2)
//array te na thakle -1 print korbe

stuId[3]=300;
console.log(stuId)
stuId.push('anamul');
console.log(stuId)
stuId.pop('anamul');
console.log(stuId)

stuId.unshift('anamul');
console.log("using unshift: "+stuId)
stuId.shift();
console.log("using shift: "+stuId)
var arr = ['rahim','karim','rabbi',101,200,300]
console.log(arr)
 var arrShift = arr.shift('anamul')
console.log(arrShift)

var country = ['dhaka', 'cumilla' , 'sylhet','rajshahi'];
console.log(country)

var obj = {
    names: "anamul",
    age: 22,
    city: "dhaka",
    obj1: {
        names1:"rashed",
        age1:24
    }
}
console.log(obj)
var arr4 =  [1,2,3,["a","b", "c"], {names:"anamul",age:22,town:["cumilla", "sylhet", "khulna"]}]
console.log(arr4)
// console.log(arr4[2].town[1])
console.log("shala")