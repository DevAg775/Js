//  const marvel_heroes = ["thor", "Ironman "," spiderman "]
//  const dc = ["Batman","Caiptan Marvel"]

//  marvel_heroes.push(dc) // it pushes a array into array instead of adding to arrays

//  console.log(marvel_heroes);
//  console.log(marvel_heroes[3][1]);
//  console.log(marvel_heroes[3]); 

// const allHeroes = marvel_heroes.concat(dc); // this method add arrays but display them in the new array
// console.log(allHeroes);

// const all_new_heroes = [...marvel_heroes, ...dc] // easier method to add arryas by spreading them... (Spread Operator)
// console.log(all_new_heroes);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array =  another_array.flat(2)
// // const real_another_array =  another_array.flat(Infinity)//we have to tell .flat(depth) to go for elements in the array to spread them out.
// // can use (infinity) to avoid thinking too much like up to which depth we have to go.
// console.log(real_another_array);


// console.log(Array.isArray("devansh")); // we can check if it is array or string
// console.log(Array.from("devansh")); // we can convert anything to array
// console.log(Array.from({name: "devansh"})); // interesting for interviews (convert values or keys for array we have to poit out which one)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // convert any data into arrays.
