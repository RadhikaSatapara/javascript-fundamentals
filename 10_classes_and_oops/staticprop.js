class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }


    static createId(){
        return `123`
    }
}

const radhika = new user("radhika")
// console.log(radhika.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","1@phone.com")
iphone.logMe();
// console.log(iphone.createId());
