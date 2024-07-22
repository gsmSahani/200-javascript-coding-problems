// write a function to reverse a string with traditional method for loop

// function reverseString(str) {
//   let reversedString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }
//   return reversedString;
// }
// const originalStr = "Gautam";
// const reverse = reverseString(originalStr);
// console.log(reverse);

// reversing the string with the help of es6

const originalString = "Gautam sahani";
const reverse = originalString.split("").reverse().join("");
console.log(reverse);
