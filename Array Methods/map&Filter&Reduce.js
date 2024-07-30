// map()
// const arr = [2, 4, 6, 8];
// const mappedArr = arr.map((num) => (num = num * 2));
// console.log(mappedArr); //[ 4, 8, 12, 16 ]
// console.log(arr); //[ 2, 4, 6, 8 ]
// map is used to transform an array by applying a function to each  element and return a new array
// when you need to apply same operation to each element then only use map

// filter\
// const arr = [1, 7, 53, 12, 41, 3, 9, 2, 4, 6, 8];
// let filteredArr = arr.filter((num) => num % 2 === 0);
// console.log(filteredArr);
// console.log(arr);
/* [ 12, 2, 4, 6, 8 ] this is filterd array
[
  1, 7, 53, 12, 41,
  3, 9,  2,  4,  6,
  8
] this is original array
*/

// it creates a new array which passed the test condition provided by the function

// reduce()
const arr = [1, 7, 53, 12, 41, 3, 9, 2, 4, 6, 8];
let reducedArr = arr.reduce((oriNum, currNum) => oriNum + currNum, 0);
console.log(reducedArr);
console.log(arr);
/**
 * 146 accumulated value which is single
[
  1, 7, 53, 12, 41,
  3, 9,  2,  4,  6,
  8
] original value
 
 */
// apply a function against the accumulater here accumulater is oriNUM and each element reduce it to a single value
