async function myFunctionOne() {
  //always returns a promise because async keyword is written before the function
  return "Hello World!";
}
const resultOne = myFunctionOne();
resultOne.then((res) => {
  console.log(res); //Output: Hello World!
});
//Equivalent to:
async function myFunctionTwo() {
  return Promise.resolve("Hello World! from Promise Constructor!!");
}
const resultTwo = myFunctionTwo();
resultTwo.then((res) => {
  console.log(res);
});
