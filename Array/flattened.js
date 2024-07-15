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
// const nestedArray = [1, [2, [3, 4], 5], 6];
// console.log("Flattened Array:", flattenArray(nestedArray));

// Approach 2: Array.prototype.reduce
// function flattenArray(arr) {
//   return arr.reduce((flat, toFlatten) => {
//     return flat.concat(
//       Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
//     );
//   },[]);
// }
// const nestedArray = [1, [2, [3, 4], 5], 6];
// console.log("Flattened Array:", flattenArray(nestedArray));

// Approach 3: array.prototype.flat es6+
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = nestedArray.flat(Infinity);
console.log("Flatten Array:", flattenedArray);
