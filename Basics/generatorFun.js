// write a generator function in javascript
function* generatorFunction() {
  console.log("Generator started");
  yield 1;
  console.log("Yielded 1");
  yield 2;
  console.log("Yielded 2");
  return 3; // Note: `return` ends the generator function
}

// Create a generator object
const generator1 = generatorFunction();

console.log(generator1.next()); // { value: 1, done: false }
console.log(generator1.next()); // { value: 2, done: false }
console.log(generator1.next()); // { value: 3, done: true }
console.log(generator1.next()); // { value: undefined, done: true }
