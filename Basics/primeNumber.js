// write a function to check if a given number is prime or not
// prime number:  a number that can be divided exactly only by itself and 1 for example 7,17,41
// to check if the given number is prime,loop from 2 to the square root of the number,if any integer evenly divides it the number is not prime

// 1st approach general method
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(5));

// 2. Optimized Iteration up to √n:
// function isPrime(number) {
//   if (number <= 1) return false;
//   const sqrtNum = Math.sqrt(number);
//   for (let i = 2; i <= sqrtNum; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(4));

