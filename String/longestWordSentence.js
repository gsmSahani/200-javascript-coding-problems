function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  let maxLength = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      longestWord = word;
      maxLength = word.length;
    }
  }
  return longestWord;
}
const sentence = "My name is gautam Sahani from xyz university";
console.log(findLongestWord(sentence));
