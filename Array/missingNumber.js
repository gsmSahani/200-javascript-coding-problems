function findMissingNum(arr) {
  const num = arr.length + 1;
  const totalSum = (num * (num + 1)) / 2;
  const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
  return totalSum - arrSum;
}
const arr = [1, 2, 4, 5, 6];
const missingNum = findMissingNum(arr);
console.log(missingNum);
