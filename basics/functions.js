// Functions

// Block of code designed to perform some specific task when the task is being called
// to make code as reusable and modular

// Types of functions:

// 1. Named Functions
// 2. Anonymous Functions
// 3. Arrow Functions
// 4. Built in Function
// 5. IIFE (Immediately invoked functions)
// 6. higher oreder ordered functions
// 7. call back functions

//--------------------------------------------------------------------

// 1. Named Functions

// creating a function by associating a perticular name is known as named functions

// syntax:

// // function call : we can call function after the fun defenition and also we can call the func befor func defenition
// functionName()

// // function defenition
// function functionName ( ){
//     //                 |-> parameters
//     // executable code 
//     console.log("hello im func")
// }

// // function call : we can call function after the fun defenition and also we can call the func befor func defenition
// functionName()

// example 

// const prompt = require("prompt-sync")({sigint:String})
// function notification (name){
//     console.log(" hi: ",name)
// }

// name = prompt("Enter your name : ")
// notification(name)


// example 2

// function math(a,b){
//     function add(){ 
//         console.log("Sum: ", a+b)
//     }
//     function mul(){
//         res = a*b
//         console.log("Product: ", res)
//     }
//     function dif(){
//         res = a-b
//         console.log("Difference ", res)
//     }
//     function div(){
//         if ( b==0){
//             console.log(" can't divisible by zero")
//         }
//         else {
//             res = a/b
//             console.log("Division ", res)
//         }
//     }
//     add()
//     mul()
//     dif()
//     div()
// }
// const prompt = require("prompt-sync")({sigint:Intl})

// let a = Number(prompt("enter first number : "))
// let b = Number(prompt("enter second number : "))

// math(a,b)



//-------------------------------------------------------------------------------

// 2. Anonymous Functions

// function without a name is known as anonymous function
// usually we assign anonymous function to a variable

// syntax:

// let variableName = function (parameters){
//     //statements
// }

// example:

// let greet = function(name){
//     console.log("hello ", name)
// }

// greet("Alice")
// greet("Bob")

//-------------------------------------------------------------------------------

// 3. Arrow Functions

// Arrow functions are a more concise syntax for writing function expressions in JavaScript.
// They are often used for shorter functions or when you want to preserve the context of 'this'.

// syntax:

// let functionName = (parameters) => {
//     //statements
// }

// example:
// let greet = (name) => {
//     console.log("hello ", name)
// }

// greet("Alice")
// greet("Bob")

//-------------------------------------------------------------------------------

// 4. Built in Function

// JavaScript provides several built-in functions that you can use directly without defining them yourself.
// Examples of built-in functions include:
// parseInt(), parseFloat(), isNaN(), isFinite(), eval(), encodeURI(), decodeURI(), setTimeout(), setInterval(), clearTimeout(), clearInterval(), etc.

// example:

let numStr = "123"
let num = parseInt(numStr)
console.log("The number is: ", num) // The number is:  123

let floatStr = "123.45"
let floatNum = parseFloat(floatStr)
console.log("The floating-point number is: ", floatNum) // The floating-point number is:  123.45


//-------------------------------------------------------------------------------

// 5. IIFE (Immediately Invoked Function Expressions)
// An IIFE is a function that is defined and immediately invoked (called) after its creation.
// It is often used to create a new scope and avoid polluting the global namespace.

// syntax:

// (function (parameters){
//     //statements
// })()

// example:

(function(name){
    console.log("Hello, " + name + "!")
})("Alice")



//-------------------------------------------------------------------------------


// 6. Higher Order Functions
// A higher-order function is a function that takes another function as an argument or returns a function as its result.
// Higher-order functions are commonly used for operations like mapping, filtering, and reducing arrays.

// example:

function mapArray(arr, func) {  
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }   
    return result;
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = mapArray(numbers, function(x) {
    return x * x;
});

console.log("Squared Numbers: ", squaredNumbers); // Squared Numbers:  [ 1, 4, 9, 16, 25 ]



// function calculator (num1, num2, operator){
//     operator(num1,num2)
// }
// function add(a,b){
//     console.log("Sum: ", a+b)
// }

// function sub(a,b){
//     console.log("Difference: ", a-b)
// }       

// function mul(a,b){
//     console.log("Product: ", a*b)
// }

// function div(a,b){
//     if (b==0){
//         console.log("can't divisible by zero")
//     }
//     else{
//         console.log("Division: ", a/b)
//     }   
// }

// const prompt = require("prompt-sync")({sigint:Intl})
// let a = Number(prompt("enter first number : "))
// let b = Number(prompt("enter second number : "))
// let op = prompt("enter operator (+, -, *, /) : ")
// if (op == "+"){
//     calculator(a,b,add)
// }
// else if (op == "-"){
//     calculator(a,b,sub)
// }
// else if (op == "*"){
//     calculator(a,b,mul)
// }
// else if (op == "/"){
//     calculator(a,b,div)
// }
// else {
//     console.log("Invalid operator")
// }   


//-------------------------------------------------------------------------------

// 7. Callback Functions

// A callback function is a function that is passed as an argument to another function and is executed after some operation is completed.
// Callback functions are commonly used in asynchronous programming, event handling, and array methods like forEach, map, filter, etc.

// example:

function fetchData(callback) {
    setTimeout(function() {
        let data = "Sample Data";
        callback(data);
    }, 2000);
}

fetchData(function(data) {
    console.log("Data received: ", data);
}); // Data received:  Sample Data (after 2 seconds)

//-------------------------------------------------------------------------------