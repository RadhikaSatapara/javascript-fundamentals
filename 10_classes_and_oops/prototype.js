// let myName = "radhika     "
// console.log(myName.trueLength());


let myHeros = ["thor","spiderMan"]

let heroPower = {
    thor : "hammer",
    spiderMan:"sling",

    getspiderPower : function(){
        console.log(`spidy power is ${this.spiderMan}`);
        
    }
}

Object.prototype.radhika = function(){
    console.log(`radhika is presents in all objects`);
}

Array.prototype.heyRadhika = function(){
    console.log(`radhika says Hie`);
    
}

// heroPower.radhika()
myHeros.radhika()
myHeros.heyRadhika()
// heroPower.heyRadhika()

//Inheritance

const user = {
    name :"chai",
    email:"chai@google.com"
}

const teacher = {
    makeVideos : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupportr = {
    makeAssignment: 'Js ASsingment',
    fullTIme : true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

//Modern syntax
Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "chaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength()
"radhika".trueLength()
"IceTea".trueLength