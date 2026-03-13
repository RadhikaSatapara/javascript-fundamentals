// Primitive (call by values)

// 7 types : String , Number , Boolean , null , undefined , symbol , BigInt

const score = 100
const scoreVslue = 100.3

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol("123")

console.log(id === anotherId);

// const bigNumber = 344654654675n

//Reference (Non Primitive)

//Array, Objects, Functions 

const heros = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name: "radhika",
    age: 22,
}

const myfunction = function(){
    console.log("Hello");
}

console.log(typeof outsideTemp)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Premitive), Heap (Non-Primitive)
// when stack memory used means get copy of variables created 
// when heap memory used means get reference of origial value

let myName = "Radhika"