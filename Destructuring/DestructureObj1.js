// this was done before ES6
// const person = {
//   name: "Gautam",
//   age: 25,
//   gender: "male",
// };
// let name = person.name;
// let age = person.age;
// let gender = person.gender;
// console.log(name);
// console.log(age);
// console.log(gender);

// ES6 Version
const person = {
  name: "Sumit",
  age: 18,
  gender: "male",
};
// now destructurning the property from the person like this
const { name, age, gender } = person;

console.log(name);
console.log(age);
console.log(gender);
