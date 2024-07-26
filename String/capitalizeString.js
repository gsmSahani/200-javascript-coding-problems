// js program to capitalize the string
// function stringCapitalize(str) {
//   return str.replace(/\b\w/g, (l) => l.toUpperCase());
// }
// console.log(stringCapitalize("gautam"));

// using string and map method
function toCapitalize(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
let sentence = "My name is gautam sahani";
console.log(toCapitalize(sentence));
