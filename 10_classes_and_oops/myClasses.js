// ES6

// class User {
//     constructor(userName, email, pass) {
//         this.userName = userName
//         this.email = email
//         this.pass = pass
//     }
//     encryptPassword() {
//         return `${this.pass}abc`
//     }
//     changeUserName() {
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@chai.com", 123)
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


//behind the scene

function User(userName, email, pass) {
    this.userName = userName
    this.email = email
    this.pass = pass
}


User.prototype.encryptPassword = function(){
    return `${this.pass}abc`
}
User.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const tea = new User("Tea","tea@tea.com","234")
console.log(tea.encryptPassword());
console.log(tea.changeUserName());
