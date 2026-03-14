// 2 ways to create objects => 1) literals ,2) constructor, 

// singleton 

//onject literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "radhika",
    [mySym]: "Hello",
    age: 23,
    email: "radhika@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email = "radhika@gmail.com"
// Object.freeze(jsUser);
jsUser.email = "radhika@google.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
console.log(jsUser.greeting);


