// function that display the current date and time
// const d = new Date();
// console.log(d);

// const date = new Date("2024-04-29");
// console.log(date);
function getCurrentDateTime() {
  let currentDate = new Date();
  return currentDate.toLocaleString();
}
console.log(getCurrentDateTime());
