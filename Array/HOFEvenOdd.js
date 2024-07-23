// write a function that takes and array of number and returns a new array with only the even number
let array = [10, 12, 1, 13, 48, 24, 7, 9, 53];
function getEvenNumber(array) {
  return array.filter((num) => num % 2 === 0).map((num) => num * num);
}
console.log(getEvenNumber(array));
console.log(array);
// here we are firstly using the filter method of es6 to filter out the even number among the array element
// after filtering the array element we are making the element double
// these two method map and filter are hof 