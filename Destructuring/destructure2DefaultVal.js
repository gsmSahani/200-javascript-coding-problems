// Assigning the default value
// let arrValue = [10];
// assinging the default value 5 and 7
// let [x = 20, y = 30] = arrValue;
// console.log(x)
// console.log(y)
// console.log(arrValue)

// 2nd example
const person = {
  name: "Sumit",
};
const { name, age = 26 } = person;
console.log(name);
console.log(age);
console.log(person.age);
