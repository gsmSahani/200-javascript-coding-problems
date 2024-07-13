// maximum number in an array
// Approach 1: Using the Math.max() function and the spread operator
// Approach 2: Using the reduce() method
// Approach 3: Using the sort() method
// Approach 4: Using the Math.max() function with apply()
// Approach 5: Using the forEach() method
// Approach 6: Using a for loop
const originalArray = [10, 80, 90, 78, 12, 54, 99, 32];

// Approach 1 Math.max() with spread operator
// const maximumNum = Math.max(...originalArray);
// console.log(maximumNum);

// Approach 2 using reduce() method
// const maximumNum = originalArray.reduce(
//   (max, current) => (current > max ? current : max),
//   originalArray[0]
// );
// console.log(maximumNum);

// Approach 3 sort()

// const maximumNum = originalArray.slice().sort((a, b) => { return b - a})[0];
// console.log(maximumNum);

// Approach 4 math.max with apply()
// const maximumNum = Math.max.apply(null, originalArray);
// console.log(maximumNum);

// Approach 5 forEach ()

// let maxNumber = originalArray[0];
// originalArray.forEach((number) => {
//   if (number > maxNumber) {
//     maxNumber = number;
//   }
// });
// console.log(maxNumber);

// Approach 6 using for loop

let maxNumber = originalArray[0];
for (let i = 1; i < originalArray.length; i++) {
  if (originalArray[i] > maxNumber) {
    maxNumber = originalArray[i];
  }
}
console.log(maxNumber);
