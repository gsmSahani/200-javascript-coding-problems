// / write a javascript program that takes an array of number and return sum of all positive number
const originalArr = [1, 10, -5, 2, -8, 7, -6, 4, -1];
function positiveArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(positiveArr(originalArr));
