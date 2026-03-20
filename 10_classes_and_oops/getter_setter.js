class user {
    constructor(email,pass){
        this.email = email
        this.pass = pass
    }
    get email(){
        return this_.email.toUpperCase()
    }
    set email(value){
         this._email= value
    }

    get pass(){
        // return this._pass.toUpperCase()
        return `${this._pass}radhika`
    }
    set pass(value){
        this._pass = value
    }
}

const radhika = new user("radhika@a.com","abc")
console.log(radhika.pass);
