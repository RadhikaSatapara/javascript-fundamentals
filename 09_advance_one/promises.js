const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography,network
    setTimeout(function () {
        console.log('ASync task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log(("promice consumed"));
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("ASync task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("async to resolved");
})

const promiceThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "example@chai.com" })
    }, 1000)
})

promiceThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "radhika", password: "123" })
        }
        else {
            reject("ERROR : Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolve or rejected")
)

const promiceFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "JS", password: "123" })
        }
        else {
            reject("ERROR : Js went wrong")
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const res = await promiceFive
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    return res.json()
}).then((data) => console.log(data)
).catch ((error) => console.log(error))