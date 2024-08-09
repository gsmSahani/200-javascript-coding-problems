// write a js program to anagram
// anagram means getting the meaningful word or sentence while rearranging the original word or sentence
function anagram() {
  let a = "Silent";
  let b = "Listen";
  let str1 = a.toLowerCase().split("").sort().join("");
  console.log(a);
  console.log(str1);
  let str2 = b.toLowerCase().split("").sort().join("");
  if (str1 === str2) {
    console.log("true");
  } else {
    console.log("false");
  }
}
anagram();
