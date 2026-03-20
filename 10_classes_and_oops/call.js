function setUserName(userName){
    //complex DB calss
    this.userName = userName
}

function createUser(userName,email,password){
    setUserName.call(this,userName)

    this.email = email
    this.password = password
}

const chai = new createUser("Radhika","radhika@facebook.com",123)
console.log(chai);
