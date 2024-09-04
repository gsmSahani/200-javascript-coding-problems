// fill method
// fills the specified elements  in an array with value
// it overrides the original array
// start and end position can be specified if position is not given or specified then it will filled with the current value into arr elements

// const fruits = ["apple", "guava", "grapes", "cherry"];
// const result = fruits.fill("banana", 2, 3);
// console.log(result);

// ----------------flat---------------
//  this method concatenate the sub array Elements
// const myArr = [[1, 2],[3, 4],[5, 6],];
const myArr = [1, 2, [3, 4, 5, [6, [7], 8], 9, 3], 3];
const newArr = myArr.flat(Infinity);
console.log(newArr);
