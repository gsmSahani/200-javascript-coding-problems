// Approach 1:foreach method
// function flattenArray(arr) {
//   let flattened = [];
//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       flattened.push(...flattenArray(element));
//     } else {
//       flattened.push(element);
//     }
//   });
//   return flattened;
// }
// const nestedArray = [1, 2, 3, 4, 5, 6, [7, 8, 9, [3, 4, 5], 2, 3, 4], 7, 8, 9];;
// console.log("Flattened Array:", flattenArray(nestedArray));
// -----------------------------------------------------------------
// Approach 2: Array.prototype.reduce and concat
// function flattenArray(arr) {
//   return arr.reduce((flat, toFlatten) => {
//     return flat.concat(
//       Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
//     );
//   },[]);
// }
// const nestedArray = [1, 2, 3, 4, 5, 6, [7, 8, 9, [3, 4, 5], 2, 3, 4], 7, 8, 9];;
// console.log("Flattened Array:", flattenArray(nestedArray));
// ------------------------------------------------------------------
// Approach 3: array.prototype.flat es6+
// const nestedArray = [1, 2, 3, 4, 5, 6, [7, 8, 9, [3, 4, 5], 2, 3, 4], 7, 8, 9];
// const flattenedArray = nestedArray.flat(Infinity);
// console.log("Flatten Array:", flattenedArray);
// ---------------------------------------------------------------------
const customFlat = (nestedArray, depth = 1) => {
  const result = [];
  for (let i = 0; i <= nestedArray.length - 1; i++) {
    if (Array.isArray(nestedArray[i]) && depth > 1) {
      result.push(...customFlat(nestedArray[i], depth - 1));
    } else {
      result.push(nestedArray[i]);
    }
  }
  return result;
};
const nestedArray = [1, 2, 3, 4, 5, 6, [7, 8, 9, [3, 4, 5], 2, 3, 4], 7, 8, 9];
console.log(customFlat(nestedArray, 1)); //flatten the 1st level array
console.log(customFlat(nestedArray, 2)); //flatten the 2nd level array
console.log(customFlat(nestedArray, Infinity)); //it will completely flatten the array
