
//  let trainTicketBooking = {
//     passengerName : "Keerthi",
//     travalDate : "10-1-2030",
//     source : "bnglr",
//     destination : "kannur",
//     bookingStatus : true,
//     insurance : "yes",
//     coach : 3,
//     seatNumber: 64,
//     contact : {
//         phoneNumber : 77456678,
//         email : "test@gmail.com"
//     }  
// }

//  1. keys()

// console.log(Object.keys( trainTicketBooking))

// [
//   'passengerName',
//   'travalDate',
//   'source',
//   'destination',
//   'bookingStatus',
//   'insurance',
//   'coach',
//   'seatNumber',
//   'contact'
// ]

//  2. values()

// let allValues = Object.values( trainTicketBooking)


// [
//   'Keerthi',
//   '10-1-2030',
//   'bnglr',
//   'kannur',
//   true,
//   'yes',
//   3,
//   64,
//   { phoneNumber: 77456678, email: 'test@gmail.com' }
// ]

// fetch all the value inside the object

// for (let item of allValues ){
//     if (typeof item === "object"){
//         console.log(Object.values( item))
//     }
//     else{
//         console.log(allValues)
//     }
// }

// 3. entries()

// console.log(Object.entries( trainTicketBooking))

// [
//   [ 'passengerName', 'Keerthi' ],
//   [ 'travalDate', '10-1-2030' ],
//   [ 'source', 'bnglr' ],
//   [ 'destination', 'kannur' ],
//   [ 'bookingStatus', true ],
//   [ 'insurance', 'yes' ],
//   [ 'coach', 3 ],
//   [ 'seatNumber', 64 ],
//   [ 'contact', { phoneNumber: 77456678, email: 'test@gmail.com' } ]
// ]


// 4. assign()

// let contact = {
//     phoneNo: 85274185852,
//     email: "asdfghjk@gmail.com"
// }
// let merged = Object.assign(trainTicketBooking,contact)
// console.log("merged object", merged )

// // using spread operator
// let alternateMerge = {...trainTicketBooking, ...contact}
// console.log("merged object", alternateMerge )


// // creating copy of object using 
// let copiedMerge = {...alternateMerge}

// console.log("merged object", copiedMerge )


//  5. seal()


// prevents adding and removing of properties, still modification of existing value is allowed

// Object.seal(contact)

// console.log("Original Contract: ", contact)

// contact.alternateMobile = 2345678908   // no change in original object

// // console.log(contact)
// // Original Contract:  { phoneNo: 85274185852, email: 'asdfghjk@gmail.com' }
// // { phoneNo: 85274185852, email: 'asdfghjk@gmail.com' }

// contact.phoneNo = "xxxxx-852"    // can modify

// console.log(contact)
// Original Contract:  { phoneNo: 85274185852, email: 'asdfghjk@gmail.com' }
// { phoneNo: 'xxxxx-852', email: 'asdfghjk@gmail.com' }

// 6. freeze()

// prevents adding, removing and modification of object properties

// Object.freeze(contact)

// contact.alternateMobile = 2345678908


// console.log(contact)
// Original Contract:  { phoneNo: 85274185852, email: 'asdfghjk@gmail.com' }
//{ phoneNo: 85274185852, email: 'asdfghjk@gmail.com' }

// contact.phoneNo = "xxxxx-852" 

// console.log(contact)

//{ phoneNo: 85274185852, email: 'asdfghjk@gmail.com' }

//----------------------------------------------------------------------------------------

// let person = {
//     name: "Keerthi",
//     age: 21,
//     desg: "software engineer"
// }

// let values = Object.values(person)

// let keys = Object.keys(person)

// let result = [...values, ...keys].join("-")

// console.log(result.toLowerCase())  // Keerthi-21-software engineer-name-age-desg
//----------------------------------------------------------------------------------------


// JSON method

// light weight data

 let trainTicketBooking = {
    passengerName : "Keerthi",
    travalDate : "10-1-2030",
    source : "bnglr",
    destination : "kannur",
    bookingStatus : true,
    insurance : "yes",
    coach : 3,
    seatNumber: 64,
    contact : {
        phoneNumber : 77456678,
        email : "test@gmail.com"
    }  
}


// 1. stringify()
// to converts js object into JSON



let passengerJson = JSON.stringify(trainTicketBooking)

console.log(passengerJson)

// {"passengerName":"Keerthi","travalDate":"10-1-2030","source":"bnglr","destination":"kannur",
//     "bookingStatus":true,"insurance":"yes","coach":3,"seatNumber":64,"contact":{"phoneNumber":77456678,"email":"test@gmail.com"}}

// 2. parse() - converts a JSON into JS object

let detailsJSON = `{

    "destination" : "kannur",
    "bookingStatus" : true,
    "insurance" : "yes",
    "coach" : 3,
    "seatNumber": 64

}`

let detailObject = JSON.parse(detailsJSON)
console.log(detailObject)

// {
//   destination: 'kannur',
//   bookingStatus: true,
//   insurance: 'yes',
//   coach: 3,
//   seatNumber: 64
// }