const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const myNums = myNumbers.map((num)=>{  return num +10})

const myNums = myNumbers
.map((num)=>num * 10)
.map((num)=>num+1)   // yaha pr jo pichle map me num ki value hai wahi use hogi
.filter((num)=> num>=40)                     /// ham kitne bhi map ya filter kuchh bhi le sakte hai
console.log(myNums);


