const myObject ={
    js :'javascript',
    cpp :'C++',
    py : 'python'
}
for (const key in myObject) {
 // console.log(myObject[key]);
  
    //  console.log(`${key} is shortcut for ${myObject[key]}`);
        
    }
     
    const programming = ["js","cpp","py","java","rb"]
    for (const key in programming) {
    //    console.log(programming[key]);
       
    }


    const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United State Of America")
map.set('Fr' , "France")

for (const key in map) {
//    console.log(key);
   
}// map is not iterable in forin loop

