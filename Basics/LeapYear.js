/* 
leap year consist of 366 days 
A year is a leap year when 
 condition:
  ... when the year is multiple of 400
  ... when the year is multiple of 4 and not multiple of 100

*/

function checkYear(year) {
  // leap year condition
  // if the year is divisible by 4 and not divisible by 100 (means 4 % year === 0 and 100 % year !=== 0) ,or if the year is divisible by 400
  // then this year is known as leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
let year = 2024;
if (checkYear(year)) {
  console.log("is Leap Year");
} else {
  console.log("is Not leap Year");
}
