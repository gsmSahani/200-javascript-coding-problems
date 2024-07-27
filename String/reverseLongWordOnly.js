// approach to solve
// 1.Split the string into words.
// 2.Check the length of each word.
// 3.Reverse words that meet the length criteria.
// 4.Join the words back into a single string.

function reverseLongWordOnly(str, lengthThreshold) {
  return str
    .split(" ")
    .map((word) => {
      return word.length > lengthThreshold
        ? word.split("").reverse().join("")
        : word;
    })
    .join(" ");
}
let originalString = "Hello Logical Question I am enjoying it";
let reversedString = reverseLongWordOnly(originalString, 5);
console.log(reversedString);
