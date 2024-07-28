// write a js program to get the number of occurance of each letter in specified string

// how to deal with this problem
// 1st we have one string
// and created one empty object to store the occurences
// now split the string and iterate with foreach where each element is iterated after getting splitted
// and after that it's checking the occurances if the occurance is new then it will return false and add 1
// to the occurance if the element has occured again then it will add one+

function stringLetterOccurances(str) {
  let occurences = {};
  str.split("").forEach((element) => {
    if (occurences.hasOwnProperty(element) === false) {
      occurences[element] = 1;
    } else {
      occurences[element]++;
    }
  });
  return occurences;
}
console.log(stringLetterOccurances("duolingoes"));
