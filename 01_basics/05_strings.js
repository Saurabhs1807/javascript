const name = "saurabh"
const repoCount = 50

// console.log(name + repoCount +"Value");

// console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Saurabh-singh")

// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,5)
//substring method not accept negative index
console.log(newString);

const anotherString = gameName.slice(-12,5)
//slice method also accept negative index and it start from last
console.log(anotherString);

 const newStringOne = "  saurabh  "
     console.log(newStringOne.trim());   
     // trim method remove space from start and end
    console.log(newStringOne);

    const url = "https://www.youtube.com/watch?v=Hf4MJH0jDb4&list=RDHf4MJH0jDb4&start_radio=1"
console.log(url.replace("https","http"));

//replace method replace the string

console.log(url.includes("Saurabh"));

//include method return boolean value if the string is present or not

console.log(gameName.split('-'));

//split method convert string to array on the basis of given parameter
