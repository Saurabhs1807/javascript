
// foreach loop

// const coding = ["js","cpp","py","java","rb"]

// coding.forEach( function(item){
// console.log(item);

// })

const coding = ["js","cpp","py","java","rb"]

coding.forEach( (item) => {
// console.log(item);

})

// function printme (item){
// console.log(item);

// }
// coding.forEach(printme)

coding.forEach((item,index,arr) => {
console.log(item, index,arr);

})

const mycoding =[
    {
      languageName:"javascript",
      filename:"js"
    },
    {
      languageName:"python",
      filename:"py"
    },
    {
      languageName:"c++",
      filename:"cpp"
    },
    {
      languageName:"java",
      filename:"java"
    },

]

mycoding.forEach((item)=>{
console.log(item.languageName);

})



