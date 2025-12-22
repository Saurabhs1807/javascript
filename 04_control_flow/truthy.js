const useremail = []

// if (useremail) {
//     console.log("got user email");
    
// } else {
//     console.log("dont have user email");
    
// }

//   falsy value

//  false,  null  ,  undefined  ,  0 , -0, "" , BigInt 0n  , Nan

// truthy value 
 //  "0" , "false", " " ,[] ,{}, function(){} 

//  if(useremail.length==0){
//     console.log(" got a user email"); 
//  }
//  else{
//     console.log("dont have email");
    
//  }

//  const emptyobj ={}
//  if(Object.keys(emptyobj).length===0){
//     console.log(" got a user email");
//  }

 // nullish coalescing operator(??): null undefined

 let val1;

  val1 = 5 ?? 10  
  val1 =null ?? 10
val1 = undefined ?? 5
val1 = null ?? undefined ?? 5 ?? 10        // jo number pahle ayega null ya undefined ke baad wahi print hoga
console.log(val1);


// ternary operator

const num =100
num<=80 ? console.log("less than 80") : console.log("more than 80");


