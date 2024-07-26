// find the largest array element in a nested array
function findLargestEle(nestedArr) {
  let largest = nestedArr[0][0];
  for (let arr of nestedArr) {
    for (let num of arr) {
      if (num > largest) {
        largest = num;
      }
    }
  }
  return largest;
}
let nestedArr = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
console.log(findLargestEle(nestedArr));
