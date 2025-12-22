const user = {
    username: "saurabh",
    price: 5000,

    welcomeMessage : function(){
        console.log(`Welcome back, ${this.username}!`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "new user";
// user.welcomeMessage();

//  console.log(this);  // this always point to global object (window in browser, global in nodejs)
 

//  function chai(){
//     console.log(this);
    
//  }

 //chai();  // this always point to global object (window in browser, global in nodejs)

//  const chai = function(){
//     let username = "saurabh"
//     console.log(this.username);
//  }

const chai = () => {
    let username = "saurabh"
    console.log(this);
 }

// chai();
 
// const addTwo = (num1, num2) =>{
//     return num1 + num2;               // explicit return
// }

const addTwo = (num1, num2) =>(num1 + num2) ; // implicit return


console.log(addTwo(3, 5));
