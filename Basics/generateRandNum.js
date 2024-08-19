// write a function to generate a random number between the given range 0 - 100
// function getRandNum(max, min) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandNum(0, 100));
// Math.random is used to get the number between 0 to 1 here 1 is excluded and 0 is included
// always return the number lower than 1
// Math.floor is used to get the number between 0 to 9

// ------------------------------------------------
// function to generate an array of random number between 0 to 100
// function generateRandomNumbers(n) {
//   return Array.from({ length: n }, () => Math.floor(Math.random() * 101));
// }

// const n = 10; // Number of random numbers you want
// const randomNumbers = generateRandomNumbers(n);
// console.log(randomNumbers);
// -----------------------------------------------------
// Approach 3
// using for loop
function generateRandNum(n) {
  const numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(Math.floor(Math.random() * 101));
  }
  return numbers;
}
const n = 20;
const randNum = generateRandNum(n);
console.log(randNum);
