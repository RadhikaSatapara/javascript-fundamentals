const tinder = new Object()

tinder.id = "123abc"
tinder.name = "john"
tinder.isLoggedin = false

// console.log(tinder);

const regularUser ={
    email: "radhi@gmail.com",
    fullName:{
        userName :{
            firstName: "Hitesh",
            lastName: "choudhary"
        }
    }
}
// console.log(regularUser.fullName?.userName);

const obj1 = {1:"a",2:"B"}
const obj2 = {3:"a",4:"B"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)

const obj3= {...obj1,...obj2}
// console.log(obj3);

const user =[
    {
        id:1,
        email:"abc@m.com"
    },
    {
        id:1,
        email:"abc@m.com"
    },
    {
        id:1,
        email:"abc@m.com"
    },
    {
        id:1,
        email:"abc@m.com"
    }
]

user[1].email
// console.log(tinder)
// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))

// console.log(tinder.hasOwnProperty('email'));


const course = {
    courseName : "js",
    price: "999",
    instructor:"hitesh"
}
// course.instructor 
const {instructor} = course
console.log(instructor);

[]