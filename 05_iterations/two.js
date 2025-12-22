//for of loop

// const arr = [0,1,2,3,4,5,6]
// for (const num of arr) {
//     // console.log(num);
    
// }

const greeting = "hello world"
for (const greet of greeting) {
    // console.log(greet);
    
}

// Maps

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United State Of America")
map.set('Fr' , "France")

console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-' , value);
    
}

const myobj = {
    game1:'superman',
    game2 :'spiderman'
}
for (const [key,value] of myobj) {
    console.log(key,value);
    
}

// for of loop me object iterable nhi hai isliye object me for of loop use nhi krte


