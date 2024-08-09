// js program to reverse the individual words from sentence

const sentence = "My name is Gautam";
function reverseSent(sentence) {
  let reversedSent = sentence.split('').reverse().join('').split(' ').reverse().join(' ');

  return reversedSent;
}
console.log(sentence);
console.log(reverseSent(sentence));
