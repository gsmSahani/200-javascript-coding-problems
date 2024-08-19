// write a js program to remove all occurance in an given array

function removeOccurances(originalArr, valueToRemove) {
  return originalArr.filter((item) => item !== valueToRemove);
}
const originalArr = [1, 2, 3, 5, 2, 4, 6, 2, 8];
const valueToRemove = 2;
const result = removeOccurances(numbers, valueToRemove);
console.log(result);
