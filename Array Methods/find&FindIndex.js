// find()
const arr = [10, 20, 30, 40, 50, 60, 70];
const foundArr = arr.find((number) => number > 50);
console.log(foundArr); // Output: 60
// it provide the 1st element that satisfies the provided function

// findIndex()

const arr1 = [10, 20, 30, 40, 50, 60, 70];
const foundIndex = arr1.findIndex((number) => number > 50);
console.log(foundIndex); //5
// The findIndex method finds that the number 60 (at index 5) is the first one that meets the condition (> 50).
// it returns the index of the 1st element that satisfies the provided function
