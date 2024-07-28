// loop an array of objects and remove all the objects which do not have genders value male
const arr = [
  { name: "John", gender: "male" },
  { name: "Mike", gender: "male" },
  { name: "Alex", gender: "non-specified" },
  { name: "Emily", gender: "female" },
  { name: "Sophia", gender: "female" },
];
var count = 0;
arr.forEach(function (element) {
  if (element.gender !== "male") count++;
});
for (let i = 1; i <= count; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].gender !== "male") {
      arr.splice(j, 1);
    }
  }
}
console.log(arr);
