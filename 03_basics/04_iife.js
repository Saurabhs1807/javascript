// immedietly invoked function expression

(function chai(){
    console.log(`Database Connected`)  
})();  // this is how we call the function immediately after defining it

// IIFE is used to avoid polluting global namespace
// IIFE is used to create a private scope for variables and functions

(() => {
    console.log(`Database connected two`)
})()

// agaer hame do bar iife use krni ho to pahle wale ko semicolon se end krenge tabhi run hoga
