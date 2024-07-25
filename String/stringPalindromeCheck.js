// program to check palindrome
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome('mom'))
