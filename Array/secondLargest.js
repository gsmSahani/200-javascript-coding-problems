// find the second largest number in an array
// input [12,35,1,10,34,1] ---> op:34
// input [10,5,10] ----> OP: 5

// function secondLargest(arr) {
//   const uniqueArr = Array.from(new Set(arr)); // removing the dupliicate value
//   uniqueArr.sort((a, b) => b - a); // sorting the array element after removing the duplicate
//   console.log(uniqueArr);
//   if (uniqueArr.length >= 2) {
//     return uniqueArr[1];
//   } else {
//     return -1;
//   }
// }
// const arr = [10,5,10];
// console.log(secondLargest(arr));
// note a - b is ascending order sorting
// and b - a is descending order sorting

// --------------------Optimised Approach-----------------------------
// input [12,35,1,10,34,1] ---> op:34
function secondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargest([12, 35, 1, 10, 34, 1]));
