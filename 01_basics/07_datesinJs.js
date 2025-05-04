let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

/*// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)*/ 

console.log(typeof myDate);

let myCreatedDate1 = new Date(2023 , 0 , 23)
let myCreatedDate2 = new Date(2023 , 0 , 23, 5 , 3)
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate1);
console.log(myCreatedDate2);

console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());



let myTimeStamp = Date.now()

console.log(myTimeStamp); 

console.log(myCreatedDate3.getTime()); // help in create polls
console.log(Math.floor(Date.now()/1000)); // to convert in milisec

let newDate = new Date() 
console.log(newDate); 
console.log(newDate.getMonth() + 1); 
console.log(newDate.getDay()); // start from Sun -> 0 to Sat -> 6

// ${newDate.getDay()} and the time 
newDate.toLocaleString('default', { 
    weekday: "long", // to get full of days
    })