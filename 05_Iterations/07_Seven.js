// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNUms = myNumbers.map((num)=> num+10) // maps as filter

// console.log(newNUms);

// 2.
// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNUms = myNumbers.map((num)=> num+10).map((num)=>num+9) // Chaining (multiple maps at once)

// console.log(newNUms);

//3.
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNUms = myNumbers.map((num)=> num+10).map((num)=>num+9).filter((num) => num >=25) // Chaining (multiple maps at once) with filter

console.log(newNUms);