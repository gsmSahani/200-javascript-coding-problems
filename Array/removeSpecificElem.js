// Approach 1:
// Forloop
// function removeSpecificElem(arr, elem) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== elem) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(removeSpecificElem(arr, 2));
// console.log(arr)

// Approach 2:
// Filter() method
function removeSpecificElem(arr, elem) {
  return arr.filter((item) => item !== elem);
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(removeSpecificElem(arr, 3));
console.log(arr);
