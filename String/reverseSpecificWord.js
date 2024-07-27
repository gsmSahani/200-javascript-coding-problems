function reverseSpecificWord(str, targetWord) {
  let words = str.split(" ");
  // find the target and reverse i
  let newWords = words.map((word) =>
    word === targetWord ? word.split("").reverse().join("") : word
  );
  return newWords.join(" ");
}
let originalString = "Gautam Sahani";
let targetWord = "Sahani";
let reversedString = reverseSpecificWord(originalString, targetWord);
console.log(reversedString);
