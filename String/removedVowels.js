// Write a function in JavaScript that takes a string as input and returns a new string with all the vowels removed.
function removedVowels(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let extractedVowels = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      extractedVowels += str[i];
    }
  }
  return extractedVowels
}
const str = "Hi there my name is gautam sahani!"
console.log(removedVowels(str))
