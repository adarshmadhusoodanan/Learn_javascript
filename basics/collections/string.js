// string

// homogeneous
// immutable
// supports only +ve indexing
// supports slicing
// duplicates are allowed
// ordered

// exmple

// let fname = "Keerthana"
// let reversed = ''
// for(let i=fname.length-1; i>=0; i--){
//     console.log(fname[i])
//     reversed += fname[i]
// }
// console.log(reversed)

//----------------------------------------------------------

// built in methods

// 1. toUpperCase()

// let fname = "Keerthana"
// console.log(fname.toUpperCase())     //KEERTHANA

// 2. toLowerCase()

// let fname = "Keerthana"
// console.log(fname.toLowerCase())   //keerthana

// 3. length()

// let fname = "Keerthana"
// console.log(fname.length)  //9

// 4. concat()

// let fname = "Keerthana"
// let surname = "Gowda"
// console.log(fname.concat(surname))   //KeerthanaGowda

// 5. replace()

// let fname = "Keerthana"
// console.log(fname.replace('ana','uve'))

// 6. slice()

// let fname = "Keerthana gowda"
// console.log(fname.slice(0,10))  //Keerthana
// console.log(fname.slice(10))    //gowda

// 7. split()

// let fname = "Keerthana gowda"
// console.log(fname.split(' '))  // [ 'Keerthana', 'gowda' ]

// optimised
// let fname = "Keerthana"
// console.log(fname.split("").reverse().join(""))

// 8. trim() : removed unwanted whitespaces(used in inputfield frontend)

// let fname = "     Keerthana gowda"
// console.log(fname.trim())    //Keerthana gowda

// 9. trimStart()

// let fname = "   keerthana"
// console.log(fname.trimStart())           //keerthana

// 10. trimEnd()
 
// let fname = "   keerthana   "
// onsole.log(fname.trimEnd()) 


// 11. padStart()

// const prompt = require("prompt-sync")({sigint:true})

// t = true
// while(t){
//     let nums = prompt("enter your number: ")
//     if (nums.length !=10){
//     console.log("invalid number")
// }
// else{
//     console.log(nums.slice(6).padStart(nums.length,'*'))
//     t= false
    
// }
// }

// let fname = "keerthana"
// console.log(fname.padStart())

//  12. padEnd()
// const prompt = require("prompt-sync")({sigint:true})


// let email = prompt("enter your email : ")
// console.time()
// names = email.split("@")[0]
// console.log(names.slice(0,4).padEnd(names.length,"*").concat(email.split("@")[1]))
// console.timeEnd()  //default: 2.362ms



// let email = prompt("enter your email : ")
// console.time()

// console.log(email.slice(0,4).padEnd(10,"*")+email.slice(-10))
// console.timeEnd()  //default: 1.874ms



// let email = prompt("enter your email : ")
// console.time()

// console.log(email.slice(0,4).padEnd(email.length-17,"*").concat(email.slice(email.length-12,email.length).padStart(email.length,"*")))
// console.timeEnd()


// 13. indexof(char)

// returns the index number of first occurance given character

// let city = "bangalore"
// console.log("index of first a: ", city.indexOf("a"))  // 1


// 14. lastIndexof(char)
// returns the index of last occurance given char


// 15. charAt(index)
// returns the character which is present at specified index, if character is not present, return undefined

// console.log(city.charAt(7))   //r

// 16. charCodeAt(index)
// returns the ASCII value of the character which is present

// console.log(city.charCodeAt(6))  //111


//String.fromCharCode()

// res= ''
// for (let i=97; i<=97+25; i++){
    
//     res += " "+ String.fromCharCode(i)

// }
// console.log(res)  // a b c d e f g h i j k l m n o p q r s t u v w x y z


// 17. startWith()


// 18. endWith()

// 19. includes()
// check weather given sting is included in original string or not. returns boolean.

// console.log()






