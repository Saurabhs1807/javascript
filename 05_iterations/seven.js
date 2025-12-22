const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc , currval){
//   console.log(`${acc} is accumulator and ${currval} is current value`)
// return acc + currval
// },0  
// )

const myTotal = myNums.reduce((acc , currval) => acc + currval , 0)

console.log(myTotal);


 const shoppingCart = [
    {
        itemname: "javascript Course",
        price : 9999
    },
    {
        itemname: "python Course",
        price : 999
    },
    {
        itemname: "webd Course",
        price : 19000
    },
    {
        itemname: "data science Course",
        price : 12000
    }
 ]
  const total = shoppingCart.reduce((acc , item)=> acc+item.price ,0)
  console.log(total);
  