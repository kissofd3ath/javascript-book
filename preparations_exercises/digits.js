/* Using arithmetic operators to determine */
/* the individual digits of a 4-digit number like "4396" */ 
let number = 4936;
let ones = number % 10;
console.log(ones);
number = (number - ones) / 10;
let tenths = number % 10;
console.log(tenths);
number = (number - tenths) / 10;
let hundredths = number % 10;
console.log(hundredths);
number = (number - hundredths) / 10;
let thousandths = number % 10;
console.log(thousandths);