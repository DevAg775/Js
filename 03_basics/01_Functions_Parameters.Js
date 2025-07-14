// function saymyname (){

//     console.log("D")
//     console.log("E")
//     console.log("V")
//     console.log("A")
//     console.log("N")
//     console.log("S")
//     console.log("H")
// }
 
// saymyname // refrence of funciton
// // () // used for execution of function

// saymyname ()

// // function addtwonumber (number1,number2){
// //     console.log(number1+number2)
// // }

// function addtwonumber (number1,number2){

//     // let result = number1 +number2
//     // return result

//     // result = number1 + number2
// }

// addtwonumber(5,6)
// addtwonumber(5,"6") // it will just print both numbers as strings
// addtwonumber(5,"a")
// addtwonumber(5,null)

// const result = addtwonumber(5,null)
// // console.log("Result:",  result );

// function loginusername(username = "Sam"){ // sam value is used when nothing argument is given
//     if(!username){// if nothing arguemnt is given 
//         console.log("Please enter a username");
//     }
//     else{
//       return   `${username} just logged in`
//     }
// }

// console.log(loginusername("Devansh"))

// function calcualteCartPrice(num1){ // This case works fine if we know only one thing is added in cart that is only single argument but if many then..?
//     return num1
// }

// console.log(calcualteCartPrice(2))

// function calcualteCartPrice( ...num1){ // then rest operator is used (rest and spread operator is same but thier working are different based on where they used)
//     return num1
// }

// console.log(calcualteCartPrice(2,400,399,399,222,224,33))

// function calcualteCartPrice(value1, value2, ...num1){ // value1 and value2 takes first two arguments and rest arguments goes under the rest operator.
//     return num1
// }

// console.log(calcualteCartPrice(2,4,23,23,23))

// methods to access objects in functions

// const user = {

//     name : "devansh",
//     location : "xyz"

// }
function handleObject (anyobject){
    console.log (`name is ${anyobject.name} and location is ${anyobject.location}`);
}

// handleObject(user) //Method 1

handleObject({ // method 2 
    name: "dev",
    location: "xuz"
})

//Passing arrays in functions
 

mynewArray = [100,200,300]

function returnSecondvalue(getArray){

    return getArray[1]
}

// console.log(returnSecondvalue(mynewArray)) method 1

console.log(returnSecondvalue([200,300,400])) // method 2