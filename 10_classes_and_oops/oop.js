const user = {
    username: "radhika",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user detaiils from DB");
        // console.log(`UserName: ${this.username}`);
        console.log(this);
    }

}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = User("radhika", 12, true)
const userTwo = new User("radhika", 12, true)
console.log(userOne);

// when we use New keyword , a empty object get creates which known as instance.
// Constructor Function

// User is a constructor function used to create user objects.

// this Keyword

// this refers to the current object.

// It is used to assign values to object properties like username, loginCount, and isLoggedIn.

// Calling Function Without new

// No new object is created.

// this refers to the global object.

// Properties get attached to the global scope.

// This is not the correct way to use constructor functions.

// Calling Function With new

// When new is used:

// An empty object is created.

// this points to the new object.

// Properties are added to that object.

// The object is returned automatically.

// return this

// Not necessary when using new.

// JavaScript automatically returns the new object.

// Key Point

// Constructor functions should always be called with the new keyword to create a proper object instance.