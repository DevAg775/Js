// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // Always use semicolon to end initial IIFE in case of two or more than two IIFE's 

( (name) => {   // unnamed IIFE with parameters passed.
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')