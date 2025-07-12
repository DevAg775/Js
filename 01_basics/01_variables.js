const accountId = 14434234
let accountEmail = "devansh@gmail.com"
var accountPassword = "122334"
accountCity = "Jaipur" //not to be preffered because it declares globally
let accountState 

// accountId = 2 // not allowed, const variable can't be changed later

accountEmail = "hgh@gmail.com"
accountPassword = "11212121"
accountCity = "bengaluru"


console.log(accountId);
console.log(accountEmail);

console.log(accountPassword);
console.log(accountCity);


/*
Prefernot to use var
because of issue in blockscope and functional scope
*/

console.table([accountId,accountPassword,accountCity,accountEmail,accountState])

// Notes
// Imagine you have a toy box. You want to put some toys in it and play with them later.

// 🧸 var — Old Toy Box
// Long ago, kids used var to make toy boxes. But this box had a little problem:
// Even if you said, "Hey, I want this toy only inside my room," it still goes around the whole house! 😱
// Also, if you say "I want a new toy with the same name," it says, "Okay!" and replaces the old one without warning. 😬

// So:

// var ignores room rules (called block scope).

// var lets you make new boxes with the same name (called redeclaration).

// 🧸 let — New & Smarter Toy Box
// Now, kids use let because it listens better!
// If you say, "I want this toy only inside my room," it says, "Got it!"
// And if you try to make a toy with the same name in the same room, it says, "Nope! You already have one!" 👍

// So:

// let stays in the room you told it to.

// let doesn’t let you make another toy with the same name in the same room.