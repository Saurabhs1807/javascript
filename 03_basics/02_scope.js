var c = 5; // Global scope
let a =10

if(true){
    let a = 1;
    const b = 2;
    var c = 3;    //var ko nhi pata block scope hota hai
    // console.log("inside if block:", a, b, c);
}
// console.log("outside if block:", a,c);   // Works fine, var is function-scoped
//  console.log("outside if block:", a, b); // ReferenceError: a is not defined


function one(){
    const username = "saurabh";

    function two(){ 
        const website = "learnwithsaurabh.com";
        console.log(username);
    }
    // console.log(website); // Error: website is not defined
    two();
}

// one(); // Outputs: saurabh

// two(); // Error: two is not defined

if (true){
    const username = "saurabh";
    if(username === "saurabh"){
        const website = "learnwithsaurabh.com";
        console.log(username +" " +  website);
    }
    // console.log(website); // Error: website is not defined
}

// console.log(username); // Error: username is not defined


//+++++++++++++++++++++ interesting +++++++++++++++++++


addone(5); // it used before declaration because of function hoisting
function addone(num){
    return num + 1;
}

 addtwo(5);    // it can't be used before declaration because of function expression hoisting 

const addtwo = function(num){
    return num + 2;
}
