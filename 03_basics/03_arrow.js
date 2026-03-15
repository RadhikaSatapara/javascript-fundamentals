const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} ,welcome to the website`);
        console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let user = "radhika"
//     console.log(this.user);
// }
// chai()

// const chai = function () {
//     let user = "radhika"
//     console.log(this.user);
// }
// chai()

const chai = () => {
    let user = "radhika"
    console.log(this);
}
// chai()



// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return
// const addTwo = (num1, num2) => (num1 + num2) //implicit return in another way (in curly braces "return" is used , but in round braces "return" is not used)

const addTwo = (num1, num2) => ({username:"radhika"})
console.log(addTwo(3, 4));

const myArray = [2,3,4,5,6,6]
