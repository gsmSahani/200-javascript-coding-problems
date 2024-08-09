// js program to remove duplicate character from string
const str = "Electronceephalographically";
function removeDuplicateCharStr(str) {
  const filterStr = str
    .split("")
    .filter((item, index, str) => {
      return str.indexOf(item) === index;
    })
    .join("");
  return filterStr;
}
console.log(str);
console.log(removeDuplicateCharStr(str));
