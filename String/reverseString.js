// program to reverse a string

// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseStr("shambhu"));

// 2nd Approach
function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}
console.log(reverseString("mira"));
