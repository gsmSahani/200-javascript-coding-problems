// -----------------------spread operator----------------------
// the spread operator expand or spread out elements from an array or object to another one
// combining array
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const newArr = [...arr1, ...arr2];
// console.log(newArr);

// the spread operator unpack and merge,copy and pass array element to the function without even explicitly
// iterating through them like in loop

// passing arguments to function
// function sum(a, b, c) {
//   return a + b + c;
// }
// const nums = [1, 2, 3];
// const result = sum(...nums);
// console.log(result);

// --------------------------rest operator-------------------
// the rest operator collect all the remaining elements into array
function sum(...numbers) {
  return numbers.reduce((acc, currVal) => acc + currVal, 0);
}
const result = sum(10, 20, 30, "gautam");
console.log(result);
