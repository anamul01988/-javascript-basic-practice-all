
let i;
let operation = 1;
for(i = 1; i<=10;i++){
    let  fact = 1;
    for(let j = i; j>1; j--){
        fact*=j;
        operation++;
    }
    console.log(`factorial of ${i} is : ${fact}`);
}
console.log("for this code , operation is : ", operation)
console.log("\n")

let factorial =1;
let neddedLoop  = 1;
for(let i = 1; i<10; i++){
    factorial*=i;
    console.log(`factorial ${i} of ${factorial}`)
    neddedLoop++;
}
console.log("for this code , operation is : ", neddedLoop);
 

//fibonacci
console.log("fibonacci::::");
let veryOld=0;
let oldNumber =1;
let newNumber = 1;
for(let i = 0; i<10;i++){
    console.log(veryOld)
    oldNumber = newNumber;
    newNumber = veryOld + oldNumber;
    veryOld = oldNumber;
}
