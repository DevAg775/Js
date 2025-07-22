// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march"); // If we reomve break statement then it will move on to next case 
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
} 
// We can also use return in case of break if there is fucn with void or int