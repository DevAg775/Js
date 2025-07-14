// // singleton //created by constructor singleton created not created by literals.
// // Object.create

// // object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",// symbol is used in sqr brackets to used as a symbol or otherwise it will trated as string
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }


 console.log(JsUser.email)
console.log(JsUser["email"])

// console.log(JsUser.email)  //1st method to access elements in object
// console.log(JsUser["email"])  //2nd & best method to access elements in object because it's the only way can be used to access line no 11 . method can't be used to access strings

// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser) // to lock value
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
