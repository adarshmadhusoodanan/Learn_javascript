const date = new Date()
console.log(date)

// 1. getFullYear(): returns the year in four digits
console.log("curent year ",date.getFullYear())

// 2. getMonth(): returns the month in 0-11 (0 for January and 11 for December)
console.log("current month ",date.getMonth())

// 3. getDate(): returns the date of the month from 1-31
console.log("current date ",date.getDate())

// 4. getDay(): returns the day of the week from 0-6 (0 for Sunday and 6 for Saturday)
console.log("current day ",date.getDay())

// 5. getHours(): returns the hours from 0-23
console.log("current hour ",date.getHours())

// 6. getMinutes(): returns the minutes from 0-59
console.log("current minutes ",date.getMinutes())

// 7. getSeconds(): returns the seconds from 0-59
console.log("current seconds ",date.getSeconds())

// 8. getMilliseconds(): returns the milliseconds from 0-999
console.log("current milliseconds ",date.getMilliseconds())

// 9. toString(): returns the date in string format
console.log(date.toString())