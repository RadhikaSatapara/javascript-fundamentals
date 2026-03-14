function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("I");
    console.log("K");
    console.log("A");

}
// sayMyName()

// function addTwoNumber(num1,num2){

//     console.log(num1+num2);
// }

function addTwoNumber(num1, num2) {
    // let res = num1+num2
    // return res;

    return num1 + num2
}
const res = addTwoNumber(3, 4)
// console.log("res" ,res);

function loginUser(userName = "sam") {
    if (!userName) {
        console.log("please enter a username");
        return
    }
    return `${userName} just Logged in`
}
console.log(loginUser("Radhika"))
// console.log(loginUser())


function calculateCartPrice(var1, var2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user1 = {
    username: "radhika",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user1);
handleObject({
    username: "sam",
    price: 100
})

const myNewArray = [200, 300, 4000, 1000]

function returnSecondValue(getArray) {
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([233,456,7787,7878]));
