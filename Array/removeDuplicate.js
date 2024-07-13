// Remove the duplicates from an array

// There are various approach to remove the duplicates let's explore

const originalNum = [1, 8, 2, 7, 1, 2, 9, 7, 6, 4, 2, 8, 9, 2];
// Approach 1 `set`

// const uniqueArray = [...new Set(originalNum)];
// console.log(uniqueArray);

// Approach 2 filter()
// suntac of filter array.filter(function(currentValue, index, arr), thisValue)

// const uniqueArray = originalNum.filter(
//   (value, index, self) => self.indexOf(value) === index
// );
// console.log(uniqueArray);

// Approach 3 reduce ()

// const uniqueArray = originalNum.reduce((acc, current) => {
//   if (!acc.includes(current)) {
//     acc.push(current);
//   }
//   return acc;
// }, []);
// console.log(uniqueArray);

// Approach 4 for of loop
// const uniqueArray = [];
// for (const item of originalNum) {
//   if (!uniqueArray.includes(item)) {
//     uniqueArray.push(item);
//   }
// }
// console.log(uniqueArray);

// Approach 5 forEach()

// const uniqueArray = [];
// originalNum.forEach((item) => {
//   if (!uniqueArray.includes(item)) {
//     uniqueArray.push(item);
//   }
// });
// console.log(uniqueArray);

// Approach 6 for loop
const uniqueArray = [];
for (let i = 0; i < originalNum.length; i++) {
  if (uniqueArray.indexOf(originalNum[i]) === -1) {
    uniqueArray.push(originalNum[i]);
  }
}
console.log(uniqueArray);
