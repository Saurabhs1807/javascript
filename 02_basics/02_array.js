const marvel_heroes = ["thor ", "ironman ", "spiderman "];
const dc_heroes = ["superman ", "batman ", "flash "];

// marvel_heroes.push(dc_heroes)

 // adds the entire dc_heroes array as a 
// single element at the end and treat as a element of array

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); // to access batman

const all_heroes = marvel_heroes.concat(dc_heroes)  // concat adds element individually

// console.log(all_heroes); 

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // spread operator (isko ham kitni bhi array add krne ke liye use kr sakte hai)

// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],[7,[8,9]]] // nested array

const real_another_array = another_array.flat(Infinity) // flat method flattens the array upto the specified depth

console.log(real_another_array);


console.log(Array.isArray(real_another_array)); // to check if the variable is an array or not
console.log(Array.isArray("hello"));
console.log(Array.from("hello")); // converts a string to an array
console.log(Array.from({name: "harshit"})); // converts a string to an array and gives an empty array for non iterable objects



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // creates an array from the given arguments
