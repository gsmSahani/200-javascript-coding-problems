const arr = [10, 20, 30];
const obj = {
  name: "gautam",
  age: 25,
};

// first convert the object to array like object structure
const objArr = Object.values(obj);
// console.log(objArr);
const result = arr.concat(objArr);
// console.log(result);
console.log(result);
