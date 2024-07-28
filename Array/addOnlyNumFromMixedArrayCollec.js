// write a js program to add only the number from the array collection of different values
const array = ["gautam", 10, "hahahah", "heheheh", 25, 10, "lolololo"];
let sum = 0;

array.forEach((element) => {
  if (typeof element === "number") {
    sum += element;
  }
});

console.log(sum);
