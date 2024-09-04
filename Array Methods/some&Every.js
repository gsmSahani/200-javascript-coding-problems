// const numbers = [1, 2, 3, 4, 5, 6];
// const newNumbers = numbers.some((val, index, arr) => {
//   return val > 3;
// });
// console.log(numbers);
// console.log(newNumbers);
// it returns boolean value instead of remaining satisfied condition

const numbers = [1, 2, 3, 4, 5, 6];
const newNumbers = numbers.every((val, index, arr) => {
  return val > 3;
});
console.log(numbers);
console.log(newNumbers);

// return true if all the element pass the test otherwise false
// this means here is if the all the number is greater than 3 then only it will pass the test otherwise
// it will return boolean false value