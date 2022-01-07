//iterative way = loop chaliye kore kaj hoy
//recursive way = function er vitor function k call kaj hoy
function factorial(n){
    let sum = 1;
    for(let i = 1; i <= n; i++){
        sum = sum * i;
        // console.log(`${i} = ${sum}`);
    }
    return sum;
}
//  factorial(8);
// console.log(factorial(5))
let fact = factorial(5);
console.log(`factorial of : ${fact}`);
console.log("\n find factorial using while");
let i=1;
let fact1 = 1;
let n = 5;
while(i<=5){
    fact1*=i;
    console.log(`factorial of ${i}: ${fact1}`)
    i++;
}



console.log("\n now using recursive way finding factorial: ");
function factorial1(n){
    if(n==0){
        return 1;
    }
    else{
        return factorial1 (n-1)*n;
    }
}
let fact2 = factorial1(4);
console.log(`factorial of : ${fact2}`);

console.log("\n now using iterative way finding fibonacci : ");
let fibonacciLength = 6;
let fibonacci = [0,1];
for (let i =2; i <= fibonacciLength; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    // console.log(fibonacci);
    // console.log(fibonacci[i-2], fibonacci[i-1],"  =  " ,fibonacci[i]);
}
console.log(fibonacci);



console.log("\n now using function and loop  finding fibonacci : ");
function fibonacci1 (fibolength){
    let fibonacci1 = [0,1];
    for(let i =2; i<= fibolength;i++){
        fibonacci1[i] = fibonacci1[i-1] + fibonacci1[i-2];
        // console.log(fibonacci1)
    }
    console.log(fibonacci1)
}
fibonacci1(5);

console.log("\n now using function and if else finding fibonacci : ");
function fibonacci2 (fibolength1){
    if(fibolength1==0){
        return 0;
    }
    else if(fibolength1 == 1){
        return 1;
    }
    else{
        return fibonacci2[i] = fibonacci2(fibolength1-1) + fibonacci2(fibolength1 -2);
    }
}
 let result = fibonacci2(10);
console.log(result);

 
console.log("\n now using function and if else finding fibonacci with all element : ");
function fibonacci3 (fibolength2){
    if(fibolength2==0){
        return [0];
    }
    else if(fibolength2 == 1){
        return [0,1];
    }
    else{
        // return fibonacci2[i] = fibonacci2(fibolength1-1) + fibonacci2(fibolength1 -2);
        let previousFibo = fibonacci3(fibolength2 -1);
        let presentFibo = previousFibo[fibolength2 - 1] + previousFibo[fibolength2 - 2];
        previousFibo.push(presentFibo)
        return previousFibo;
    }
}
 let result1 = fibonacci3(10);
console.log(result1);
// //
