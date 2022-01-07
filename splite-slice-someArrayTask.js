//array start .............\\
var arr = new Array(5);
arr[0] = 'anamul';
arr[1] = 'dhsrtunl';
arr[2] = 'imrul';
arr[3] = 'kayes';
console.log(arr[0]);
//another rule
var i;
var arr=['anamul', 'haquue', 'shano','hossain'];
console.log(arr.length)
for ( i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log(arr);
console.log(typeof(arr));
//data type hocce list jeitake object o bole 
// console.log(arr.push('sokina')); aita o dile hoy
arr.push('sokina', 'rujina','amina');

// console.log(arr[i]); aita dile only jeita insert hoice seitai dekhabe
console.log("single: "+arr)
arr.unshift('akbar');
console.log("single unshift: "+arr)
console.log(arr.length)
arr.pop('hossain', 'rujina');
console.log('after pop: '+ arr)
arr.pop();
//only last index value remove korbe ar shift first index remove korbe 

console.log("single pop: "+ arr)
arr.shift();
console.log(" single shift: "+arr)
// now i will use concat
// var arr1 = new Array(5);
var arr1 = ['mithu', 'morinul',' mishu'];
var concatUsing = arr1.concat(arr);
console.log(concatUsing);
var concatUsingAnother = arr.concat(arr1);
console.log('another array list is :'+concatUsingAnother);
concatUsingAnother.splice(2,3,"karim","rahim");
//splice mane hocce 2 no index ta remove hobe and aita soho 3 ta value delete hobe tar sthe  karim rahim insert hobe 
console.log("using splice: "+concatUsingAnother)

var names=['bangladesh','india', 'srilanka', 'afghan'];
var sortedNames = names.sort();
console.log("after sorting: "+sortedNames);
var reverseSortedNames = names.reverse();
console.log("reverse sorting: "+reverseSortedNames);
var newArray = names.slice(2);
//slice mane hocce removing kora 
console.log(newArray);

var numbers = [10,24,50,90,05,20];
numbers.sort(function(a,b){
    return a-b;
});
console.log("assending number is : "+ numbers);
numbers.sort(function(a,b){
    return b-a;
});
console.log("descending number is : "+numbers);

//array end........

//method, function and constructon start.....
var students1={
    name:"anamul",
    age:34,
    cgpa:3.45
}
var students2={
    name:"akramul",
    age:24,
    cgpa:1.45
}
console.log("\n function: \n")
console.log(students1)

//construction
function student(name, age ,cgpa){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.display=function(){
        console.log(this.name);
        console.log(this.age)
        console.log(this.cgpa)
    }
}
var student5 = new student('anamul haque', 22, 3.34);
var student6= new student('akramul haque', 33, 3.22);
student5.display();
student6.display();
