// write a js program to flatten the array

const numbers = [1, 2, 3, 4, 5, 6, [7, 8, 9, [3, 4, 5], 2, 3, 4], 7, 8, 9];
// console.log(numbers.flat()); //shallow copy flatten the first 1 or (nested) array inside the main array
// console.log(numbers.flat(1));
const customFlat = (numbers, depth = 1) => {
  const result = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (Array.isArray(numbers[i]) && depth > 1) {
      result.push(...customFlat(numbers[i], depth - 1));
    } else {
      result.push(numbers[i]);
    }
  }
  return result;
};
console.log(customFlat(numbers, 1)); //flatten the 1st level array
console.log(customFlat(numbers, 2)); //flatten the 2nd level array
console.log(customFlat(numbers, Infinity)); //it will completely flatten the array
/*
[ 1, 2, 3, 4, 5, 6, [ 7, 8, 9, [ 3, 4, 5 ], 2, 3, 4 ], 7, 8, 9 ]
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 3, 4, 5 ], 2, 3, 4, 7, 8, 9 ]
[
  1, 2, 3, 4, 5, 6, 7,
  8, 9, 3, 4, 5, 2, 3,
  4, 7, 8, 9
]


*/
