//          Javascript basics

//-- initially created to make our webpage as alive
//-- it is high level programmming scripting, interpreted and single threaded


//          features

//-- it has full integration with HTML and css
//-- simple things tare done simply
//-- it executes directly inside the browser
//-- doesn't required any special preperation and compilatkiond for execution
//-- all major browser supports js
//-- it is case sensitive


//  method and execution

// 1. directly inside the browser using console
// 2. in html doc using scripts tag we can embed
// 3. 

// printing statments in the window
// window.alert("halloooooooo")

// printing statments in the console
// console.log("hellooo")


//          variables

// variables are name given to memory location or container to store values

// syntax

//  var/let/const variable_name = value;

//  var - global scope, can be re-declared the updated, can be access any where in the program, re- initialization also possible
//  let - block scope, can be updated but not re-declared,
//  const - block scope, cannot be updated or re-declared

// rules to choose identifier
//  -> can be alphnumeric 
//  -> should be start with letter, _ or $
//  -> cannot be start with number
//  -> case sensitive
//  -> should be meanigful

// note : semicolon(;) is not mandatory at the end

// ---------------------------------------------------------------------------------------------

// var 

// var Name = 'keerthi'
// console.log(Name)


// scope

// var studentName = 'adarsh'

// {
//     console.log("student name: ", studentName)                   //student name:  adarsh
    
//     var institute = 'pyspyder'

//     console.log("institute name: ", institute)                  //institute name:  pyspyder

// }

// console.log("institute: ",institute)                            //institute:  pyspyder

// // re-initialize
// studentName = 'keerthi'
// console.log("student name after re-init: ", studentName)        //student name after re-init:  keerthi

// // re-dexclaration

// var studentName = 'keerthanaa'

// console.log("student name after re-declaration: ", studentName)  //student name after re-declaration:  keerthanaa


// var is usaually not used in production level code because the data can be lost.
// bugs will be there if we use var


//------------------------------------------------------------------------------------------------------


// let

// it is used to decalre block scoped variable
// bugs will be less

// Syntax :

//  let variable_Name = value ; 


// let location = 'BTM'
// console.log("pyspider location is :", location)         //pyspider location is : BTM

// {
//     console.log("pyspider location is :", location)  //pyspider location is : BTM

//     let time = 6
//     console.log("inside the block -> time is: ", time) //inside the block -> time is:  6
// }

// console.log("outside the block -> time is: ", time)   //ReferenceError: time is not defined


// re-initialization
// location = 'kerala'

// console.log(" re-init location : ", location)  //re-init location :  kerala


// re-decalration

// let location = 'karnataka'

// console.log(" re-decalaration", location)   //SyntaxError: Identifier 'location' has already been declared



// -----------------------------------------------------------------------------------------------------------------------


// const

// -> to declare constant variable
// -> block scope, can be updated but not re-declared 
// -> once valuve assigned it cannot be changed
// -> re initialisation and re decalaretion is not possible

// syntax:
//      const variable_name = value
//      const username = 'adarsh'


// const pi = 3.14
// console.log(pi)                                         //3.14

// {
//     console.log("inside a block: ", pi)                 //inside a block:  3.14

//     const gravity = 9.8

//     console.log("gravity: ", gravity)                   //gravity:  9.8
// }


// console.log("outside the block gravity: ", gravity)     //ReferenceError: gravity is not defined


// re-initialisation
// pi = 4
// console.log("re- initialisation of pi: ", pi)           //TypeError: Assignment to constant variable.


// re-declaration
// const pi = 4
// console.log("re-decalration of: ", pi)          //SyntaxError: Identifier 'pi' has already been declared


//------------------------------------------------------------------------------------------------------------


// deference

//          scope       re-init     re-decl
//--------------------------------------
// var      global      yes         yes
// let      block       yes         no
// const    block       no          no
//--------------------------------------