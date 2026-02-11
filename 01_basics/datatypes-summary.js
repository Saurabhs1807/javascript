// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId)

const BigNumber = 345678477847n



// Reference (Non primitive)

// Array, Objects, Function

const heroes = ["shaktiman","naagraj","doga"]
const myobj ={
    name: "saurabh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world")
}
console.log(typeof isLoggedIn)




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "saurabhsinghdotcom"

let anothername = myYoutubename
anothername = "saurabh"

console.log(myYoutubename);
console.log(anothername)

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "saurabh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
