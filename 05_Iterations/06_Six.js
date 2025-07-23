// 1.
// const coding = ["Js","Ruby","java","Python","cpp"]

// const values = coding.forEach((val)=> {
//     console.log(val);
// })

// console.log(values);

//for each loop doesn't return anything that's why in output there is undefinedf
//2.
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => 
//      num > 4
// )

// console.log(newNums)
// 3.
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //If scopes are used then must use return keyword

// const newNums = myNums.filter( (num) => {
//   return   num > 4
// })

// console.log(newNums)

//4.
// const newNums = []  // With the help of ForEach loop instead of filter

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums)

// fetching data from db by using filter method
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')


//    userBooks = books.filter( (bk) => { return bk.publish >= 2000 }) // scopes are open {} that's why return keyword is used

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"})
  console.log(userBooks);