// function addTwoNumbers(a, b) {
// console.log(a + b);
// }



function addTwoNumbers(a, b) {
    // let result = a + b;
    // return result;
    return a + b;
}

//  addTwoNumbers(3, 5); // Returns 8

const result = addTwoNumbers(10, 15); // Returns 25
console.log( "result:", result); // Outputs: 25


function loginUserMessage(username) {
    if (!username) {
        console.log("please provide a username");
        return;
    }
    return `Welcome back, ${username}!`;
}
// console.log(loginUserMessage("saurabh"));
console.log(loginUserMessage("saurabh"));

 
function calculateCartPrice(value1, value2, ...num1){
    return num1
}

console.log(calculateCartPrice(100, 200, 300, 400, 500)); 
 
const user = {
    username: "saurabh",
    price: 5000,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user);

handleObject({
    username: "saurabh",
    price: 5000,
})

const myArray = [100, 200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([100, 200, 300, 400, 500]));