// function to reverse a number
function reverseNumber() {
  let a = 7890;
  let splitted = Number(a.toString().split("").reverse().join(""));
  console.log(splitted);
  console.log(isNaN(splitted)); //we are checking if the splitted is number or not
}
reverseNumber();

// traditional method
function revNumber(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(revNumber(12345));
