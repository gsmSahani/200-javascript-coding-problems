function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y(); //we are returning y here then also we can access the a this called the closure
}
x();
// here a is lexically inside the x() function and x() is lexically inside the global scope
