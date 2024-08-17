// reversing the array

// usign different approach
// Approach 1: Using the reverse() method
// Approach 2: Using the spread operator
// Approach 3: Using the map() method
// Approach 4: Using a for...of loop
// Approach 5: Using a while loop
// Approach 6: Using the reduce() method
// Approach 7: Using a for loop
// Approach 8: using join split reverse join and map method

const originalArray = [1, 2, 3, 4, 5, 6];

// Approach 1 reverse()
// const reversedArray = originalArray.reverse();
// console.log(reversedArray);

// Approach 2 using spread operator
// const reversedArray = [...originalArray].reverse();
// console.log(reversedArray);

// Approach 3 map() method

// const reversedArray = originalArray.map(
//   (_, index, arr) => arr[arr.length - 1 - index]
// );
// console.log(reversedArray);

// Approach 4 for..of loop
// const reversedArray = [];
// for (const item of originalArray) {
//   reversedArray.unshift(item);
// }
// console.log(reversedArray);

// Approach 5 while loop
// let i = originalArray.length - 1;
// const reversedArray = [];
// while (i >= 0) {
//   reversedArray.push(originalArray[i]);
//   i--;
// }
// console.log(reversedArray);

// Approach 6 Reduce method

// const reversedArray = originalArray.reduce((acc, current) => {
//   acc.unshift(current);
//   return acc;
// }, []);
// console.log(reversedArray);

// Approach 7 for loop
// const reversedArray = [];
// for (let i = originalArray.length - 1; i >= 0; i--) {
//   reversedArray.push(originalArray[i]);
// }
// console.log(reversedArray);

// Approach 8
// String based reversal method

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr
  .join("")
  .split("")
  .reverse("")
  .join("")
  .split("")
  .map(Number);
console.log(result);
