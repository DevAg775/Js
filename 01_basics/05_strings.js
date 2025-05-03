const name = "devansh"
const repoCount = 50 

// console.log(name + repoCount + " Value"); // Not to be recommended (+) older way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// new way to write stringr

const gameName = new String('devansh-da-com')

console.log(gameName[0]); // for accessing each character one by one
console.log(gameName.__proto__); //for accessing prototype methods of object

console.log(gameName.length);
console.log(gameName.toUpperCase()); // another way for accessing prototype methods of object
console.log(gameName.charAt(4)); // to identify the position 
console.log(gameName.indexOf('v')); // to identify the index of character

const newString = gameName.substring(0,4) // to break a string into substring
console.log(newString); //.substringnot uses neg values while as .slice uses.

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "  devansh  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://devansh.com/devansh%20agarwal"

console.log(url.replace('%20', '-')) // to replace something insede the string

console.log(url.includes('sundar')); // to check something exist in strin or not


console.log(gameName.split('-'));
