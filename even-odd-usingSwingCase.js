// var color = "black"
// switch(color){
//     case "green":
//         console.log("color is green")
//         break;
//         case "red":
//             console.log("color is red")
//             break;
//          default:
//             console.log("there is no color") 
// }


 var n=30;
var m= console.log( "\nafter modulus m: "+n%2)
switch(n%2){
    case 1:
        console.log("odd")
        break;
    case 0:
        if ((n % 2 == 0) && !(n/2 == 0))
            console.log('even')
        else
            console.log("zero")
        break;
    default:
        console.log("wrong number")

}
