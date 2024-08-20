// Approach 1:
// indexOf()
// function findIndex(arr,target){
//     return arr.indexOf(target)
// }
// const arr = [1,2,3,4,5,6]
// console.log(findIndex(arr,4))

// Approach 2:
// custor for loop
function findIndex(arr, target) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return result;
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(findIndex(arr, 5));
