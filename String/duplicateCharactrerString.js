// js program to remove duplicate character from string
// const str = "Electronceephalographically";
// function removeDuplicateCharStr(str) {
//   const filterStr = str
//     .split("")
//     .filter((item, index, str) => {
//       return str.indexOf(item) === index;
//     })
//     .join("");
//   return filterStr;
// }
// console.log(str);
// console.log(removeDuplicateCharStr(str));

// Approach 2
// using set
// const str = "Electronceephalographically";
// function removeDuplicateCharStr(str) {
//   let result = [...new Set(str)].join("");
//   return result;
// }
// console.log(removeDuplicateCharStr(str));

// Approach 3
// for loop
// function removeDuplicateCharStr() {
//   let str = "Electronceephalographically";
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (result.indexOf(str[i]) === -1) {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(removeDuplicateCharStr());

// Approach 4
// using reduce method

// function removeDuplicateCharStr() {
//   let str = "Electronceephalographically";
//   let result = str
//     .split("")
//     .reduce((acc, item) => {
//       if (!acc.includes(item)) {
//         acc.push(item);
//       }
//       return acc;
//     }, [])
//     .join("");
//   return result;
// }
// console.log(removeDuplicateCharStr());

// Approach 5
// Using regular Expression

function removeDuplicateCharStr() {
  let str = "Electronceephalographically";
  let result = str.replace(/(.)(?=.*\1)/g, "");
  return result;
}
console.log(removeDuplicateCharStr());
