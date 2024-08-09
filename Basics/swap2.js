// swapping value without 3rd value
let a = 10;
let b = 20;
console.log(`The value before swapping is:A = ${a} and B = ${b}`);

a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);
console.log(`The value after swapping is:A = ${a} and B = ${b}`);
