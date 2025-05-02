// Primitive - 7

/* String, Number , Bollean, null , undefined , Symbol , BigInt
*/
 
/*JavaScript is a dynamically typed language. Because data type will 
automatically assigned at the time of compilation or code execution*/

const score = 100 // numbeer
const scoreValue = 100.3 // number

const isLoggedIn = false 
const outsideTemp = null // object
let userEmail;

const id = Symbol('123') // both symbols return value are different
const anotherId = Symbol ('123')

console.log(id === anotherId);

// const bigNumber = 2334234234234234234345344454324n


// Refrence Type or Non-Primitive 

/* Array , Objects , Functions*/

const heroes =  ["shaktiman","flying jatt"] //Arrays are placed in [] and values are given in ""

let myObj = {
    name: "devansh", // objects are written with in {}
    age: 24,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber); /*non primitive data types return data type functions and in case
of function it is object function */

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  object function
       Object  =>  object */