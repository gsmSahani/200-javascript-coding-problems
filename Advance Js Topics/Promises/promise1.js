// want some promise after 2 seconds
const promise = new Promise((resolve, reject) => {
  setTimeout(() => console.log(resolve("done")), 2000);
});
promise.then((result) => {
  console.log(result);
});
console.log(promise);
