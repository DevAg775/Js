// //array

const myArr = [0,1,2,3,4,5]
// const myArr1 = ["Krrish,Flying jatt","Shaktiman"]

// const myArr2 = new Array(1,2,3,4)
// // console.log(myArr[3]);


// // Array methods

// // myArr.push(6)
// // myArr.push(7) // to add elements in a array
// // myArr.pop() // automatically pops last element 

// // myArr.unshift(9) // add element in starting by shifting all elements 
// // myArr.shift() // remove element in starting by shifting all elements 

// console.log(myArr.includes(8)); // check for the element is existing ornot

// console.log(myArr.indexOf(8)); // find the index for the element (-1) if element is not in the array
// console.log(myArr.indexOf(3));

// const newArray = myArr.join() // it joins and convert the array into strings

// console.log(newArray);
// console.log(typeof newArray);

//slice , spice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)

console.log(myn2);

/*SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array. */