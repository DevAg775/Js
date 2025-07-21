// const tinderUser = new Object() //singleton object
// // const tinderUser = {} // non singleton object

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }
// // We can use nested objects and can access them with the . method
// console.log(regularUser.fullname.userfullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2, obj4) // assign operator used

// const obj3 = Object.assign({}, obj1, obj2, obj4) // empty is used for target and source read mdn of assign operator

// const obj3 = {...obj1, ...obj2} // here spread can also be used to avoid array same problem
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]   array ke andar objects

// users[1].email   // to access object present in side the array
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   // can acess all keys at once 
// console.log(Object.values(tinderUser));  // can acess all values at once 
// console.log(Object.entries(tinderUser));  //  can access entries in form of pair of arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // for checking the property is present or not


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

//  course.courseInstructor
// const {courseInstructor} = course // another way of accessing values in objects

// const {courseInstructor: instructor} = course // method used to de-structure like courseinstructor can be now called as instructor {de-structing}

// console.log(courseInstructor);
// console.log(instructor);

// { JSON which is a type of object
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [ Sometimes When we get API in format of arrays instead of JSON
//     {},
//     {},
//     {}
// ]