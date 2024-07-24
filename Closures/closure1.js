// closure 1
function outer() {
  let a = 10; //lexical scope
  return function inner() {
    return a + 10;
  };
}
const result = outer(); //returned  inner() function with variable a op:- 20

console.log(result());
