// 1
// console.log(y)
// y=1
// throw error y is not defined
// because in hoisting the var let and const declaration are hoisted not initialization

// 2
// console.log(y)
// var y=1
//the op is  undefined
// because here the var y is hoisted and giving op because of first phase of memory creation phase where the
// initial value is provided undefined by default by the js engine/interpreter

// 3
// y = 3;
// console.log(y);
// var y;
// print 3
// because here again the var declaration  is hoisted  and and then initialization and console

// 4
// console.log(x)
// let x = 10
// reference error cannot access x before initialization
// because let is block scope and let is hoisted be the it's value is not hoisted with initial value
// the catch is it is hoisted but in different memory location before the value is initialized it is stored
// in TDZ temopral dead zone

// 5
// var x = 10;
// let x;
// console.log(x);
// identifier x has already been declared
// it is so because by default in memroy creation phase x is already assigned a default value with undefined and after that
// we are declaring the x variable in the scope which is already declared and holds a defalut value

// 6
// function hoistingEx() {
//   console.log("Value of a in local scoper:", a);
// }
// console.log("Value of a in global scoper:", a);
// var a = 20;
// hoistingEx();
// undefined and 20
// because in the memory creation phase first the function is executed and it holds the entire funciton
// and when is consoled then that time the a is hoisted at the top of the scope where it was assigned the the
// default value undefined and after that the local scope is called at that time the value was assigned 20 and the funciton is invoked

// 7
// function hoistingex() {
//   a = 10;
// }
// hoistingex();
// console.log(a);

// the op is 10
// because when we declare any variable without var declaration are considered to be global variable

// 8
// function hoistingex() {
//   var a = 10;
// }
// hoistingex();
// console.log(a);
// reference error a is not defined
// because when we create varaibale with var inside the function it became the blocked scope and it cannot be
// accessed outside of the function or block and here in this case we are trying to access the var in outside of the scope

// 9
// function a() {
//   console.log("1");
// }
// a();
// function a() {
//   console.log("2");
// }
// a();
//  2 2
// because here we are invoking the a() 2 times and the same name function is overriding the previous function 


