// rotate an array element by k
// given an integer array nums rotate the array by right by k steps
// where k is non negative

// inputs nums = [1,2,3,4,5,6,7], k=3 ----> op: [5,6,7,1,2,3,4]
// inputs nums = [-1,-100,3,99], k=2 ----> op: [3,99,-1,-100]
function rotateArray(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated);
  return nums;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
