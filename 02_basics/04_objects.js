// const jiouser = new Object()

const jiouser = {}

jiouser.id = "234abs"
jiouser.name = "saurabh"
jiouser.isLoggedIn = false

// console.log(jiouser);


const reguser = {
    email:"saurabh@google.com",
    fullname :{ 
        username : {
            firstname:"saurabh",
            lastname:"singh"
        }
    }
}

// console.log(reguser.fullname.username.firstname);

const obj1 ={1:"a", 2:"b"}
const obj2 ={1:"a", 2:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2)  // we will not use this 

// const obj3 ={...obj1, ...obj2}
// console.log(obj3);


const users =[
    {
        id: 1,
        email:"saurabh@gmail.com"
    },
      {
        id: 2,
        email:"saurabh@gmail.com"
    },
      {
        id: 3,
        email:"saurabh@gmail.com"
    },
      {
        id: 4,
        email:"saurabh@gmail.com"
    }
]

users[1].email
console.log(jiouser);

console.log(Object.keys(jiouser));
console.log(Object.values(jiouser));
console.log(Object.entries(jiouser));

console.log(jiouser.hasOwnProperty(`isLoggedIn`));


const course = {
    coursename : "js in hindi",
    price : 999,
    courseInstructor : "saurabh",
}

const {courseInstructor:instructor} = course    // destructuring and renameing
// const {courseInstructor} = course    // destructuring

// console.log(course.courseInstructor);

console.log(instructor);
