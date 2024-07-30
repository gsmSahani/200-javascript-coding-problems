// const mobile = "Apple";
// example of setTimeout
// this function will run afte some periods of time which takes callback
// function mob() {
//   const mobile = "Apple";
//   setTimeout(() => {
//     console.log("this is:", mobile);
//   }, 1000);
// }
// mob();

// example of setInterval

let count = 1;
let timer = setInterval(() => {
  console.log("The time is:", count++);
}, 500);
setTimeout(() => {
  clearInterval(timer);
}, 1000);
// it is important to clear the setInterval or else it will create memory leak
