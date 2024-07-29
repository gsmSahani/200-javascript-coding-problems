// js function to clone an array
function cloneArray(arr) {
  return [...arr];
}
console.log(cloneArray([1, 2, 3, 4, 5]));

// forEach
function clonedArr(arr) {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(element);
  });
  return newArr;
}
console.log(clonedArr([1,2,3,4,5,6]))