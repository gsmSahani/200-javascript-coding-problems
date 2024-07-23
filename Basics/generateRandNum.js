// write a function to generate a random number between the given range
function getRandNum(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandNum(10, 20));
// Math.random is used to get the number between 0 to 1 here 1 is excluded and 0 is included
// always return the number lower than 1
// Math.floor is used to get the number between 0 to 9