// function to reverse a number
function reverseNumber() {
  let a = 7890;
  let splitted = Number(a.toString().split("").reverse().join(""));
  console.log(splitted);
  console.log(isNaN(splitted));//we are checking if the splitted is number or not
}
reverseNumber();
