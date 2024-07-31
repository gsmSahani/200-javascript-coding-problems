// Write a function in JavaScript that finds the second highest number in an
// array of numbers.
function secondHighest(num) {
  const sortedNum = num.sort((a, b) => b - a);
  return sortedNum[0];
}
const numbers = [10, 80, 90, 12, 54, 85, 100];
console.log(secondHighest(numbers));
