// skippin the unwanted value
const arrayValue = ["appple", "banana", "kiwi", "grapes", "avacado"];
const [x, , ...y] = arrayValue;
console.log(x);
console.log(y);
// we omitting the element by the (,) comman and storing the remaining by the help of spread operator
