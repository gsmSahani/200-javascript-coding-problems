// case 1
// function a() {
//   console.log(b);
// }
// var b = 10;
// a();
// firstly the clg is finding the b inside its function and when it is now availabler it finding in its gloabal
// scope and printing the value 10

// case 2
// function a() {
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// var b = 10;
// a();
// here the output is 10
// because when the b is searching it first search inside it's own function c() when it not found
// it goes to it parent function which is lexically inside the global scope and after then also it's not found
// then it is searching in the global scope which means it forming the lexical scope
// note c is inside lexical environment of a the a and a is lexicallly inside the global scope

// case 3
// function a() {
//   c();
//   function c() {
//     var b = 100;
//     console.log(b);
//   }
// }
// var b = 10;
// a();
// here the op will be 100
// as we know in closure it is all about the lexical environment first b will find it's value inside own function
// if not found then it will move to it's parents but here b found the value inside the c() so it prints 100

// case 4
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
console.log(b);

// in this it will throw error b is not defined
// because a function can access global variable but a global execution context cannot access any local variable
