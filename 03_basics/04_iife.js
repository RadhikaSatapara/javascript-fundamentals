// Immediately Invoked Function Expression (IIFE)

// IIFE (Immediately Invoked Function Expression) is a JavaScript function that executes immediately after it is defined. It is mainly used to create a private scope and avoid polluting the global namespace.

//named IIFE 
(function chai(){
    console.log(`DB CONNECTED`);
})();


( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('radhika')

/*   Execution context , call stack

code :
--------
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

***** JavaScript execution context*******

- run the code in 2 phase 
    1)Global execution context
    2)functional Execution context
    3)Eval Execution Context (just for info)

- 2 phase 1)Memory creation phase 2) execution phase


1) global execution -> allocate to this
2) memory phase -> collect all variables and just keep 
    for ex. => val1 ->undefined , val2->undefined , addnum-> defination,result1 ->undefined ,result2->undefined
3)execution phase : val1 <- 10 , val2 <- 5 , addNum -> whenever each time function get call each time the creates the new executional context which containes "new variable + execution thread" and this get delete after complition of the task, 
-> again create memory phase : -> val1 -> undefined , val2 -> undefined , total-> undefined
-> again creates the execution context : num1 ->10 , num2 ->5 , total->15 , now this ttoal returns at global execution(step 1)


*****************JavaScript Call Stack and Execution Context.************
               ================================================


**1️⃣ First step
==================

Control goes to the Global Execution Context.

This is automatically created when the JavaScript file runs.

**2️⃣ Function execution
====================== 

If the code is:
===============

function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Hello");
}

one();

** Execution flow will be:
=========================

** Call Stack
==============

|               |
|_______________|
|  Three()      |
|_______________|
|  Two()        |
|_______________|
|  One()        |
|_______________|
| Global Exec   |
=================

3️⃣ Stack behavior
========================

one() is called → pushed to stack

two() is called → pushed to stack

three() is called → pushed to stack

three() finishes → removed from stack

two() finishes → removed from stack

one() finishes → removed from stack
*/



/*  Execution Context + Call Stack In Better Words  */

// Code Example
// ------------

// let val1 = 10
// let val2 = 5

// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }

// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)



// ******** JavaScript Execution Context ********

// JS runs the code using Execution Context.

// Types of Execution Context :

// 1) Global Execution Context (GEC)
// 2) Function Execution Context (FEC)
// 3) Eval Execution Context (just for info, rarely used)



// ******** JavaScript runs code in 2 phases ********

// 1) Memory Creation Phase
// 2) Execution Phase



// STEP 1 : Global Execution Context

// -> When JS program starts, Global Execution Context is created first
// -> 'this' keyword is allocated here
// -> In browser 'this' = window object



// STEP 2 : Memory Creation Phase

// -> JS scans the whole code
// -> Variables and functions get memory space
// -> Variables store "undefined"
// -> Functions store "definition"

// Example memory allocation :

// val1     -> undefined
// val2     -> undefined
// addNum   -> definition
// result1  -> undefined
// result2  -> undefined



// STEP 3 : Execution Phase

// Now JS executes code line by line

// val1 <- 10
// val2 <- 5


// When function is called :

// result1 = addNum(val1 , val2)

// -> Each time a function is called
// -> a NEW Function Execution Context is created

// Inside it contains :

// "new variable environment + execution thread"



// ******** Function Execution Context ********

// When addNum() runs, again 2 phases happen inside it


// Memory Phase :

// num1  -> undefined
// num2  -> undefined
// total -> undefined


// Execution Phase :

// num1 <- 10
// num2 <- 5
// total <- 15

// return total


// -> Now this returned value goes back to Global Execution Context

// result1 <- 15



// ******** After completion ********

// -> Function Execution Context gets deleted
// -> Control goes back to Global Execution Context



// ******** Same process repeats ********

// result2 = addNum(10 , 2)

// Again new execution context created

// Memory Phase :

// num1  -> undefined
// num2  -> undefined
// total -> undefined


// Execution Phase :

// num1 <- 10
// num2 <- 2
// total <- 12

// return total

// result2 <- 12



// ******** Call Stack ********

// Execution Contexts are managed using Call Stack.

// Call Stack follows :

// LIFO (Last In First Out)


// Example stack :

// |               |
// |_______________|
// | addNum()      |
// |_______________|
// | Global Exec   |
// =================


// -> Global Execution Context enters first
// -> Function contexts are pushed when function is called
// -> After completion they are popped out


// Last added -> First removed