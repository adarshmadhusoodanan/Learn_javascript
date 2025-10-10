// Collections in JavaScript
// Collections are data structures that can hold multiple values or items.

// 1. Arrays
// 2. Objects
// 3. Sets
// 4. Maps
// 5. WeakSets
// 6. WeakMaps
// 7. JSON
// 8. Strings (often treated as collections of characters)

//-------------------------------------------------------------------------------

// 1. Arrays

// collection of items stored at contiguous memory locations.
// An array is an ordered collection of items, which can be of any type.

// characteristics of array

// 1. Ordered: Elements in an array maintain the order in which they were added.
// 2. Indexed: Each element in an array has a numeric index, starting from 0.
// 3. Dynamic Size: Arrays can grow or shrink in size as elements are added or removed.
// 4. Heterogeneous: An array can contain elements of different types (e.g., numbers, strings, objects).
// 5. Mutable: The contents of an array can be changed after it is created.
// 6. scliceable: You can extract a portion of an array using methods like slice().

// example:

// Creating an array
// let numbers = [1, 2, 3, 4, 5];
// console.log("Numbers: ", numbers); // Numbers:  [ 1, 2, 3, 4, 5 ]

// let fruits = ["apple", "banana", "cherry"];
// console.log("Fruits: ", fruits); // Fruits:  [ 'apple', 'banana', 'cherry' ]

// let data = [1, "hello", true, null, {name: "Alice"}, [1, 2, 3]];
// console.log("Data: ", data); // Data:  [ 1, 'hello', true, null, { name: 'Alice' }, [ 1, 2, 3 ] ]


//                              built in methods of array

//      1. toString()
// Converts the array to a string representation.

// let arr = [1, 2, 3];
// console.log(arr.toString()); // "1,2,3"

let pysiders = ["Students","Mentors","Alumni","Managers"]
console.log(typeof pysiders) // object

console.log(pysiders.toString()) // "Students,Mentors,Alumni,Managers"

stringPysiders = pysiders.toString()
console.log(typeof stringPysiders) // string


//      2. pop()
//  Removes the last element from the array and returns it.

let lastElement = pysiders.pop()
console.log("After pop(): ", pysiders) // After pop():  [ 'Students', 'Mentors', 'Alumni' ]
console.log("Popped element: ", lastElement) // Popped element:  Managers


//      3. push(element1, element2, ...)
//  Adds one or more elements to the end of the array and returns the new length of the array.

let newLength = pysiders.push("Instructors")
console.log("After push(): ", pysiders) // After push():  [ 'Students', 'Mentors', 'Alumni', 'Instructors' ]
console.log("New length: ", newLength) // New length:  4


//      4. shift()
// Removes the first element from the array and returns it.

let firstElement = pysiders.shift()
console.log("After shift(): ", pysiders) // After shift():  [ 'Mentors', 'Alumni', 'Instructors' ]
console.log("Shifted element: ", firstElement) // Shifted element:  Students


//      5. unshift(element1, element2, ...)
// Adds one or more elements to the beginning of the array and returns the new length of the array.

let newLength2 = pysiders.unshift("Students")
console.log("After unshift(): ", pysiders) // After unshift():  [ 'Students', 'Mentors', 'Alumni', 'Instructors' ]
console.log("New length: ", newLength2) // New length:  4


//      6. join(separator)
//  Joins all elements of the array into a string, separated by the specified separator.

let joinedString = pysiders.join(" - ")
console.log("Joined string: ", joinedString) // Joined string:  Students - Mentors - Alumni - Instructors

//      7. concat(array1, array2, ...)
//  Merges two or more arrays and returns a new array.

let morePysiders = ["Coordinators", "Volunteers"]
let combinedArray = pysiders.concat(morePysiders)
console.log("Combined array: ", combinedArray) // Combined array:  [ 'Students', 'Mentors', 'Alumni', 'Instructors', 'Coordinators', 'Volunteers' ]

// spread operator to concatenate arrays, it creates a shallow copy of the arrays being combined.
let combinedArray2 = [...pysiders, ...morePysiders]
console.log("Combined array using spread operator: ", combinedArray2) // Combined array using spread operator:  [ 'Students', 'Mentors', 'Alumni', 'Instructors', 'Coordinators', 'Volunteers' ]

console.log([...pysiders, 10, 20, 30]) // [ 'Students', 'Mentors', 'Alumni', 'Instructors', 10, 20, 30 ]\



//      8. slice(start, end)
//  Returns a shallow copy of a portion of the array into a new array object selected from start to end (end not included).

let slicedArray = pysiders.slice(1, 3)
console.log("Sliced array: ", slicedArray) // Sliced array:  [ 'Mentors', 'Alumni' ]


//      9. splice(start, deleteCount, item1, item2, ...)
//  Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let splicedArray = pysiders.splice(1, 1, "Teachers")
console.log("After splice(): ", pysiders) // After splice():  [ 'Students', 'Teachers', 'Alumni', 'Instructors' ]
console.log("Spliced elements: ", splicedArray) // Spliced elements:  [ 'Mentors' ]


//      10. sort()
//  Sorts the elements of the array in place and returns the sorted array.

let unsortedArray = [3, 1, 4, 2]
unsortedArray.sort()    // Default sort (lexicographical) and it won't create new array
console.log("Sorted array: ", unsortedArray) // Sorted array:  [ 1, 2, 3, 4 ]


//      11. reverse()
//  Reverses the order of the elements in the array in place and returns the reversed array.

unsortedArray.reverse()
console.log("Reversed array: ", unsortedArray) // Reversed array:  [ 4, 3, 2, 1 ]


//      12. fill(value, start, end)
//  Fills all the elements of an array from a start index to an end index with a static value.

let fillArray = new Array(5).fill(0)
console.log("Filled array: ", fillArray) // Filled array:  [ 0, 0, 0, 0, 0 ]


//      13. map(callback)
//  Creates a new array populated with the results of calling a provided function on every element in the calling array.

let mappedArray = pysiders.map(function(item) {
    return item.toUpperCase();
});     

console.log("Mapped array: ", mappedArray) // Mapped array:  [ 'STUDENTS', 'TEACHERS', 'ALUMNI', 'INSTRUCTORS' ]


//      14. filter(callback)
//  Creates a new array with all elements that pass the test implemented by the provided function.

let filteredArray = pysiders.filter(function(item) {
    return item.length > 6;
});
console.log("Filtered array: ", filteredArray) // Filtered array:  [ 'Students', 'Teachers', 'Instructors' ]


//      15. reduce(callback, initialValue)
//  Executes a reducer function on each element of the array, resulting in a single output value.

let numbersArray = [1, 2, 3, 4, 5];
let sum = numbersArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("Sum: ", sum); // Sum:  15

//-------------------------------------------------------------------------------