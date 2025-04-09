const specificDateTime: Date = new Date('2020-03-10T23:59:59');

console.log(specificDateTime)

const currentDate: Date = new Date();

console.log(currentDate)
console.log(currentDate.toISOString())
console.log(currentDate.toString())
console.log(currentDate.toLocaleString('de-DE'))

/*
2020-03-10T22:59:59.000Z
2025-04-08T08:19:04.516Z
2025-04-08T08:19:04.516Z
Tue Apr 08 2025 10:19:04 GMT+0200 (Central European Summer Time)
8.4.2025, 10:19:04
*/


console.log('-----------------------------------------------------------')


const year: number = currentDate.getFullYear();
const month: number = currentDate.getMonth();
const day: number = currentDate.getDate();
const day2: number = currentDate.getDay();

console.log('Year is: ', year)
console.log('Month is: ', month + 1) // index starts with a 0, so add a +1
console.log('Day is: ', day)
console.log('Index of the day is: ', day2)


console.log('-----------------------------------------------------------')




const hours: number = currentDate.getHours();
const minutes: number = currentDate.getMinutes();
const seconds: number = currentDate.getSeconds();


console.log('The hour is: ', hours)
console.log('The minute is: ', minutes)
console.log('The second is: ', seconds)