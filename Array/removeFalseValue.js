function removeFalsyVal(arr) {
  return arr.filter(Boolean);
}
const mixedArr = [
  0,
  1,
  false,
  2,
  "",
  3,
  "a",
  null,
  "0",
  undefined,
  NaN,
  "Hello",
  4,
  5,
];
const result = removeFalsyVal(mixedArr);
console.log(mixedArr);
console.log(result);

// javascript falsy value are
/* 
false
0
"" (empty string)
null
undefined
NaN

*/

// javascript truthy values
/*
Truthy Values:

Any non-empty string, including '0', 'false', ' ', etc.
Any non-zero number, such as 1, -1, 3.14, etc.
Any object or array, even if empty.
true
*/
