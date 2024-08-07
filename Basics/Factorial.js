// write a function that calculates the factorial of given number
// factorial means 5! = 5*4*3*2*1=120
// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//       fact = fact * i;
//     }
//     return fact;
//   }
// }
// console.log(factorial(5));

// modern method
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
let result = factorial(5);
console.log(result);
