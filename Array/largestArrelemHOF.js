// find the largest arr elemnt in an array with the reduce method
function largestArrElem(arr) {
  return arr.reduce((max, current) => (current > max ? current : max));
}
let arr = [10, 90, 99, 52, 24, 72, 33];
let reduce = largestArrElem(arr);
console.log(reduce);
