//singleton
// object.create  (this way is constructor way to create object it gives singleton object)

//object literals  (it doesn't give singleton object it gives different object every time we create it)

const mySym = Symbol("key1") // symbol is a unique identifier
 
const jsuser ={
    name: "saurabh",
    "full name": "saurabh singh", // it cant accessed by dot notation because of space in between
    [mySym]: "mykey1", // symbol as a key and symbol always be in square bracket
    age: 21,
    location: "prayagraj",
    email: "saurabh@yahoo.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);        // alternate way to access the property of object
// console.log(jsuser["full name"]);     // to access the property with space in between we use
// console.log(jsuser[mySym]);         // to access the property with symbol as a key we use
 
jsuser.email ="saurabh@gmail.com"
// Object.freeze(jsuser)               // it makes the object immutable means we cant change, delete or add any property in the object
jsuser.email ="saurabh@chatgpt.com" // it will not change the email property because the object is freezed
// console.log(jsuser);

jsuser.greetings =function(){      // adding method to the object
    console.log("hello jsuser");
}
jsuser.greetings()

jsuser.greetings2 = function(){
    console.log(`hello jsuser, your name is ${this.name}`);
    
}
jsuser.greetings2()     // this keyword refers to the current object
    