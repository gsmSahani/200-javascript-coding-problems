// slice and splice methods
// slice gives you the copy of the modified array and create new array from the original array
//  while slice mutates the original array by adding ,removing and replacing the array

// here mutable means the types of variable that can be changed after creation in javascript only object and array mutable

// slice
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sliced = arr.slice(3, 6);
console.log(sliced);
console.log(arr);

// splice
let spliceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let splicedArr = spliceArr.splice(2, 4);
console.log(splicedArr);
