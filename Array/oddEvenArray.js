// js program that takes an array of numbers and returns a new array with only even number
// es6 approach filter() method

// function onlyEvenNum(num) {
//   return num.filter((num) => num % 2 === 0);
// }
// console.log(onlyEvenNum([1, 4, 9, 6]));

// traditoinal method for loop

function filterEvenNum(arr) {
  let onlyEvenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      onlyEvenNum.push(arr[i]);
    }
  }
  return onlyEvenNum;
}
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumber = filterEvenNum(numbers);
console.log(evenNumber);
