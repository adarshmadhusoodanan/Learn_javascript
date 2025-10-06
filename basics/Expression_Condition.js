// Expression And Condition

// -> combination of operands and operator
// -> peice of code which produce some value

// types of operators

// 1. arithmatic operation
// 2. assignment 
// 3. comparison 
// 4.

// Arithmatic operators

//-> 

// =>  incremnt(++)
        // pre increment  (++a) => first value increment and print
        // post increment (a++) => first print value later it will increment

// =>  decrement(--)
        // pre decrement (--a) => first value decrement and print
        // post decrement (a--) => first print value later it will decrement

// let x = 99

// console.log(++x)        //100
// console.log(--x)        //99
// console.log(x)          //99
// console.log(x--)        //99
// console.log(x)          //98
// console.log(x++)        //98
// console.log(x)          //99
// console.log(++x)        //100


//-------------------------------------------------------------------------------

// Assignment operators

// =, +=, -=, *=, /=, %=, **=

// ------------------------------------------------------------------------------

// Comparision

//      ==, != ( only value compare, not type)
//      ===, !== (value and type compare)
//      <, >, <=, >=
//      ? : (ternary operator)

// let a = 10
// let b = '10'

// console.log(a == b)         //true
// console.log(a === b)        //false
// console.log(a != b)         //false
// console.log(a !== b)        //true
// console.log(a > b)          //false
// console.log(a < b)          //false
// console.log(a >= b)         //true
// console.log(a <= b)         //true

// Ternary operator

//  syntax:
//  condition ? expression1 : expression2

// let result = a == b ? "a & b are equal" : " a and b are not equal"
// console.log(result)           //a $ b are equal

// result = a === b ? "a & b are equal" : "a and b are not equal"
// console.log(result)           //a and b are not equal

//-------------------------------------------------------------------------------

// logical operator

// AND - $$
// OR - ||
// NOT - !

//-------------------------------------------------------------------------------

// Conditions
 
// - controlling the flow of program by using certain set of rules
// - if, else if, else, switch, 

// if statement

// syntax

// if (condition) {
        // statments
//  }

// if else statment

// const prompt = require("prompt-sync")({sigint:true});                   // to run in vs code terminal
// let age = prompt("enter age: ")

// if (age>=18) {
//         console.log("eligible for voting")
// }
// else {
//         console.log("not eligible for voting")
// }




// let age = prompt("enter age: ")

// if (age>=18) {
//         console.log("eligible for voting")
// }
// else if (age<0) {
//         console.log("Invalid age")
// }
// else {
//         console.log("not eligible for voting")
// }

// let speed = prompt("enter speed: ")

// if (speed >0 && speed<=40) {
//         console.log("driving slow")
// }
// else if (speed>40 && 100<=speed) {
//         console.log("driving fastly")
// }
// else if (speed>100 && 200<=speed) {
//         console.log("driving too fastly")
// }
// else {
//         console.log("invalid speed")
// }


// nested if
//

// const prompt = require("prompt-sync")({sigint:true});

// const userName = prompt("Enter username: ")

// if(userName === "Pyspiders"){

//         const password = prompt("Enter password: ")

//         if(password === "Pyspider@123"){

//                 console.log("User Profile")
//                 console.log("UserName:", userName)
//                 console.log("Password: ", password)
//         }
//         else{
//                 console.log("incorrect password")
//         }

// }else{
//         console.error("User not found")
// }

// ----------------------------------------------------------------------------------------

// const prompt = require("prompt-sync")({sigint:true});
// let metro = prompt("metro: true/false ")

// if (metro){
//         let passengerEnter = prompt("entered: true/false ")
//         if (passengerEnter){
//                 let passengerExit = prompt("exited: true/false ")
//                 if (passengerExit){
//                         console.log("Journey completed")
//                 }else{
//                         console.log("passenger is still inside")
//                 }
//         }
//        else{
//         console.log("passenger is still waiting for metro")
//        }
// }
// else{
//         console.log("metro not came")
// }

//--------------------------------------------------------------------------

// let day = new Date().getDay()
// console.log(day)
// let today
// switch(day){
//         case 0:
//                 today = "Sunday"
//                 break
//         case 1:
//                 today = "Monday"
//                 break
//         case 2:
//                 today = "Tuesday"
//                 break
//         case 3:
//                 today = "Wednesday"
//                 break
//         case 4:
//                 today = "Thursday"
//                 break
//         case 5:
//                 today = "friday"
//                 break
//         case 6:
//                 today = "saturday"
//                 break
//         default:
//                 console.log("Invalid")
// }
// console.log("Today is :", today)

// optimised code using array

// week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","friday","saturday"]
// console.log("Today is : ", week[day])

//------------------------------------------------------------------------------------
