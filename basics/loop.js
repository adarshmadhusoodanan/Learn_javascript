// loop

// -> Repeatedly executing the block of code is known as loop

// 1. for
// 2. for in
// 3. for of
// 4. while
// 5. do while
// 6. map()
// 7. forEach()

// -------------------------------------------------------------------------------

// 1. for

// -> execute the block of code based on the no of iteration

// syntax:

//      for(start; stop; step)  {  
//
//              // executable code
//
//      }

// example

// for (let i=1; i<=10; i++){
//     console.log(i,"web technology")
// }

// const prompt = require("prompt-sync")({sigint:true});
// let n = prompt("enter a number")

// for (let i=1; i<=n; i++){
//     console.log(`${n} x ${i} = ${n*i}`)
// }


//----------------------------------------------------------------------------------------------------------------------------------------


// 2. for in 

// syntax:
//  for(let i in obj){
//      //executable
//}

// example 1

// const trainTicket = {
//     passangerName:"Adarsh",
//     travelDate: "19/7/25",
//     source: "Banglore",
//     destination: "Kannur",
//     BookingStatus: "Confirmed",
//     coach: "03",
//     seatNumber: 85,
//     insurenceAvail: true,
//     contact: {
//              mobile: 7878640875,
//              mailId: "adarshmadhu@532003"
//             }
// }

// for( let i in trainTicket){
//     console.log(i, trainTicket[i])
// }

// output

// passangerName Adarsh
// travelDate 19/7/25
// source Banglore
// destination Kannur
// BookingStatus Confirmed
// coach 03
// seatNumber 85
// insurenceAvail true
// contact { mobile: 7878640875, mailId: 'adarshmadhu@532003' }


// example 2

// for( let i in trainTicket){

//     if (typeof trainTicket[i] === "object"){
//         // iterate through all property, check condition, when value is 'object' then run inner loop
//         for (let j in trainTicket[i]){
//             console.log(j,":",trainTicket[i][j])
//         }
//     }
//     else{
//         // executes when values is not 'object'
//          console.log(i,":",trainTicket[i])
//     }
// }

// output

// passangerName : Adarsh
// travelDate : 19/7/25
// source : Banglore
// destination : Kannur
// BookingStatus : Confirmed
// coach : 03
// seatNumber : 85
// insurenceAvail : true
// mobile : 7878640875
// mailId : adarshmadhu@532003

// example 3

// const studentInfo = {
//     name: "adarsh",
//     place: "Banglalore",
//     contact: {
//         mobile: 234567890,
//         mailId: "adarsh@gmail.com",
//         address: {
//             state: "kerela",
//             district:"kannur",
//             pincode: 12345
//         }
//     }
// }

// for (let i in studentInfo){

//     if (typeof studentInfo[i] === "object"){
//         for( let j in studentInfo[i]){

//             if (typeof studentInfo[i][j]=== "object"){
//                 for (let k in studentInfo[i][j]){

//                     console.log(k," : ", studentInfo[i][j][k])
//                 }
//             }
//             else{
//                 console.log(j," : ", studentInfo[i][j])
//             }
//         }
//     }
//     else{
//         console.log(i, " : ", studentInfo[i])
//     }
// }

// output

// name  :  adarsh
// place  :  Banglalore
// mobile  :  234567890
// mailId  :  adarsh@gmail.com
// state  :  kerela
// district  :  kannur
// pincode  :  12345

//------------------------------------------------------------------------------

// 3. for of

// iterate through the list an array

// example 1

// let allSkill = ["Web", "SQL", "Python","DSA"]

// for(let skill of allSkill){
//     console.log("My skill is : ", skill)
// }

// output

// My skill is :  Web
// My skill is :  SQL
// My skill is :  Python
// My skill is :  DSA

//------------------------------------------------------------------

// 4. while loop

// loops work based on the condition executes the block of code untill and unless
// condition evaluvate to false

// syntax

// initialisation
// while(condition){
    // execution 
//}

// example 1
// let i = -23
// while(i<=23){
//     console.log(i)
//     i++
// }
// output
// -23
// -22
// .
// .
// .
// 22
// 23

// ------------------------------------------------------------------------------------------------------------------

// 5. do-while loop

// varient of while
// executes the block of code atleast one time

// syntax:

// initialisation
// do {
//  executable code
//  update
// } while(condition)

// example

// let num2 = 36
// do {
//     console.log("This is do while loop", num2)
//     num2++
// } while(num2<=35)

// example

// const car = {
//     name: "Harrier",
//     barand: "TATA",
//     color: ["Dark","Orange","Red"],
//     fuel: "petrol",
//     abs: true,
//     price : {
//         top: 300000000,
//         mid: 240000000,
//         base: 20000000
//     }
// }

// for (let i in car){
//     if ( typeof car[i] === "object"){

//         for (let j in car[i]){
//             if ( i == "color"){

//                 console.log("Color : ", car[i][j])
//             }
//             else {
//                 console.log(j," : ", car[i][j])
//             }           
//         }
//     }
//     else {
//         console.log(i, " : ", car[i])
//     }
    
// }