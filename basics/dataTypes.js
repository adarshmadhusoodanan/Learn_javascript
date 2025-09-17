//              Data Types

//  premitive                    Non-premitive

// 1. String                    1. Object
// 2. Number                   
// 3. BigInt
// 4. Undefined
// 5. Boolean
// 6. Null

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  1. String

//  -> set of character enclosed within quotes
//  -> ''," ", ` `(back ticks)

// let userName = 'Keerthana'
// console.log("Username: ", userName)                 // Username:  Keerthana

// let studentOf = "Pyspider's"
// console.log("Student of: ", studentOf)              // Student of:  Pyspider's

// // template literals (backticks)
// let coures = `python full stack development`
// console.log(`${userName} is a student of ${studentOf} and learning ${coures}`)  // Keerthana is a student of Pyspider's and learning python full stack development

// // checking data type
// console.log(typeof userName)                        // string


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  2. Number

// let age = 22
// console.log("Age: ", age)                             // Age:  22
// console.log(typeof age)                               // number

// let length = 3.5
// console.log("Length: ", length)                       // Length:  3.5
// console.log(typeof length)                            // number

// let negativeNum = -45
// console.log("Negative Number: ", negativeNum)         // Negative Number:  -45
// console.log(typeof negativeNum)                       // number

// let zero = 0
// console.log("Zero: ", zero)                           // Zero:  0
// console.log(typeof zero)                              // number

// let zeroNumber = 0123                                // octal number 
// console.log("Zero Number: ", zeroNumber)             // Zero Number:  83
// console.log(typeof zeroNumber)                        // number

// let capacity = 123456789012345                         // 15 digits
// console.log("Capacity: ", capacity)                   // Capacity:  123456789012345
// console.log(typeof capacity)                          // number

// let bigNumber = 12345678901234567890                // 20 digits
// console.log("Big Number: ", bigNumber)               // Big Number:  12345678901234567000
// console.log(typeof bigNumber)                        // number

// note : for more than 15 digits it will consider as exponential value and round off the number
//      to avoid this we can use BigInt data type

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 3. BigInt

// -> used to store large integer values more than 15 digits
// -> append 'n' at the end of the number or use BigInt() function

// let bigIntNumber = 1234567890123456789012345678901234567890n
// console.log("BigInt Number: ", bigIntNumber)         // BigInt Number:  1234567890123456789012345678901234567890n
// console.log(typeof bigIntNumber)                     // bigint

// let bigIntNumber1 = BigInt(1234567890123456789012345678901234567890)
// console.log("BigInt Number1: ", bigIntNumber1)       // BigInt Number1:  1234567890123456846996462118072609669120n
// console.log(typeof bigIntNumber1)                    // bigint

// note : BigInt is used to store large integer values more than 15 digits without rounding off the number


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4. Undefined

// -> variable that is declared but not initialized will have the value 'undefined'
// -> data type of undefined is 'undefined'
// -> we can also assign 'undefined' to a variable
// -> undefined is a global property

// let studentName
// console.log("Student Name: ", studentName)           // Student Name:  undefined
// console.log(typeof studentName)                       // undefined

// studentName = 'Adarsh'

// console.log("Student Name after initialization: ", studentName)  // Student Name after initialization:  Adarsh
// console.log(typeof studentName)                                 // string


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------