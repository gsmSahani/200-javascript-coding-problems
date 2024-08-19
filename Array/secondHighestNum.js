// Write a function in JavaScript that finds the second highest number in an
// array of numbers.
// function secondHighest(numbers) {
//   if (numbers.length < 2) return null;
// remove the duplicates and sort the array in ascending order
//   const uniqueNum = [...new Set(numbers)]; //getting the unique element
//   uniqueNum.sort((a, b) => b - a);

//   return uniqueNum.length > 1 ? uniqueNum[1] : null;
// }
// const numbers = [10, 80, 90, 12, 54, 85, 199];
// console.log(secondHighest(numbers));

// ----------------------------------------
// Approach 2
//sort and find method
// function secondHighest(numbers) {
//   if (numbers.length < 2) return null;
//   numbers.sort((a, b) => b - a);
// return numbers[0]; highest number from descending order
//   return numbers[1]; // second highest number
// }
// const numbers = [10, 80, 90, 12, 54, 85, 199];
// console.log(secondHighest(numbers));
// -------------------------------------------------

