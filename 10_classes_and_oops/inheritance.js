class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`userName is ${this.username}`);

    }
}

class teacher extends user {
    constructor(username, email, pass) {
        super(username)
        this.email = email
        this.pass = pass
    }

    addCourse() {
        console.log(`a new course was added by ${this.username}`);

    }
}

const chai = new teacher("chai", "chai@chia.com", 123)
chai.addCourse()
const masalaChai = new user("masalaChai")
masalaChai.logMe()

console.log(chai instanceof user);
