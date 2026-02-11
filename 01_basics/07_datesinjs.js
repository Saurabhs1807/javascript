// //dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth()); //0-11
// console.log(myDate.getDate()); //1-31
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 1 , 23);
// let myCreatedDate = new Date(2023, 1 , 23, 5, 7);
// let myCreatedDate = new Date("2023-02-23");
// let myCreatedDate = new Date("02-14-2022");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// `${newDate.getDay()}and te time is

newDate.toLocaleString('default',{
    weekday:'long'
})






