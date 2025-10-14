// 1. pi

console.log("1. values Pi: ",Math.PI)       //1. values Pi:  3.141592653589793

// 2. round() - round the given decimal to its previous whole number

console.log("2. Round: ",Math.round(3.3))   //2. Round:  3
console.log("2. Round: ",Math.round(3.6))   //2. Round:  4


// 3. cell() - Rounds up the given number to next whole number

console.log("3. ceil: ",Math.ceil(3.1))    //3. ceil:  4

// 4. floor()- Rounda down the given number to its previous whole number

console.log("4. floor: ",Math.floor(3.1))   //4. floor:  3
console.log("4. floor: ",Math.floor(3.9))   //4. floor:  3

// 5. trunc() - removes all decimal values and returns whole number

console.log("5. trunc: ",Math.trunc(3.1))   //5. trunc:  3
console.log("5. trunc: ",Math.trunc(3.56))  //5. trunc:  3

// 6. sqrt() - returns the sqrt of the given number 

console.log("6. sqrt: ",Math.sqrt(25))      //6. sqrt:  5

console.log("6. sqrt: ",Math.sqrt(1080))    //6. sqrt:  32.863353450309965

// 7. pow(x,y) - returns the power of given numbers

console.log("7. power of 6^4: ",Math.pow(6,4))  //7. power of 6^4:  1296

// 8. abs() - returns the absolute value of the given number

console.log("8. absloute(positive value) value of -33: ",Math.abs(-33))  //8. absloute(positive value) value of -33:  33

// 9. min() - retrun the minimum number passed

console.log("9. minimum of (4,3,2,5,0): ",Math.min(4,3,2,5,0))  //9. minimum of (4,3,2,5,0):  0

// 10. max() - returns the maximum of the given numbers

console.log("10. maximum of (4,3,2,5,0): ",Math.max(4,3,2,5,0))  //10. maximum of (4,3,2,5,0):  5

// 11. sin() - returns the sin values of given numbers

console.log("11. sin value of 1", Math.sin(1))      //11. sin value of 1 0.8414709848078965

// 12. cos() - returns the cos values of given numbers

console.log("12. cos value of 1: ", Math.cos(1))  //12. cos value of 1:  0.5403023058681398

// 13 log() - returns the log of the given number

console.log("13. log of 1: ", Math.log(1))  //13. log of 1:  0

// 14. random() - returns the random number between 0 to 1

console.log("14. random: ", Math.random())          //14. random:  0.5057671524760832


// wajsp to generate the otp of 4 digit

let OTP = Math.trunc(Math.random()* 10000)

console.log("OTP: ",OTP)
const prompt = require("prompt-sync")({sigint:true})

let userOTP = prompt("enter otp: ")

if (userOTP == OTP){
    console.log("valid otp")
}
else{
     console.log("invalid otp")
}
