//array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor']

const myArray2 = new Array(6,7,8,9,10)
// console.log(myArray[1]); // 1

//Array methods

// myArray.push(6) //add element at the end
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9) //add element at the beginning
// myArray.shift() //remove element at the beginning

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3))

const newArray = myArray.join() //convert array to string
console.log(newArray);
console.log(myArray);


// slice, splice

console.log("A " + myArray);
const myn1 = myArray.slice(1,4) //does not modify the original array

console.log(myn1);
console.log("B " + myArray);

const myn2 =myArray.splice(1,3) //modifies the original array
console.log(myn2);
console.log("C " + myArray);
