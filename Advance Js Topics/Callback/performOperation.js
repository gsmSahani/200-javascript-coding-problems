// simple example
// function calculate(add) {
//   add(10, 20);
// }
// function sumOfTwo(a, b) {
//   console.log(a + b);
// }
// calculate(sumOfTwo); //this is known as callback functoin where sumOfTwo is passed as an argument in another function
// calculate

// example 2
function performOperation(callback) {
  console.log("The function is performing"); // this will execute 1st

  setTimeout(() => {
    console.log("Operation is complete.."); //this will execute 2nd
    callback();
  }, 3000);
}
function operationCompleted() {
  console.log("Callback function is Executed: completed!"); // this will 3rd
}
performOperation(operationCompleted);
