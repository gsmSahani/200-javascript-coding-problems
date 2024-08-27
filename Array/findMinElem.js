const array = [3, 7, 5, 9, 10, 12, -6, 7, 3, 1];
// const result = Math.min(...array);
// console.log(`The minimum element from the array is: ${result}`);

// Using for loop
function findMinElem() {
  let min = [0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
console.log(`The minimum element is :${findMinElem(array)}`);
