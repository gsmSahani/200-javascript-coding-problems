// js program to remove the duplicate array element from original array
// const originalArr = [
//   53, 28, 36, 38, 12, 47, 28, 56, 36, 75, 53, 42, 96, 75, 1, 64, 42, 56,
// ];
// var uniqueArr = [...new Set(originalArr)];
// console.log(originalArr.length);
// console.log(uniqueArr);

// using filter() method

const originalArr = [
  53, 28, 36, 38, 12, 47, 28, 56, 36, 75, 53, 42, 96, 75, 1, 64, 42, 56,
];

const filterArr = originalArr.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});
console.log(originalArr.length);
console.log(filterArr)
