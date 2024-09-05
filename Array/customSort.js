function customSort(arr) {
  const len = arr.length;
  for (i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const originalArr = [7, 2, 6, 9, 3, 5, 1, 4, 8];
const customSortedArr = customSort(originalArr);
console.log(customSortedArr);
