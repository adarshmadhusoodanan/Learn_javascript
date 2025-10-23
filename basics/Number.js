// 1. parseInt() - converts string to pure number 
const prompt = require("prompt-sync")({sigint:true}) //signal interrupt
// let strNum=prompt("enter number ")
// console.log(typeof strNum)
// let intNum=parseInt(strNum)
// console.log(typeof intNum)

// // enter number 78
// // string
// // number

// // Number(): converts a string number into premitive number 
// console.log(typeof Number('100'))
// // number 
// console.log(Number('100'))
// // 100

// // parseFloat: converts string to float number 
// console.log(typeof parseFloat('100.11'))

// // isfinite :return true if given number is finite 
// console.log(isFinite(100))
// // true
// console.log(isFinite(100/0))
// // false

// // isintiger 
// console.log(Number.isInteger(123))
// // true
// console.log(Number.isInteger(123.123))
// // false

// isNaN() : check wether entered value is number or not return true if value is not a number else returns false
// console.log(isNaN("100")) 
// false

// let n = prompt("enter number ")
// isNaN(n) ? console.log(n," is not a number") : console.log(n, " is a number")

// toFixed(): converts a number into string with specified decimal points
let num = 12.34567
console.log(num.toFixed(2))
console.log(num.toFixed(4))