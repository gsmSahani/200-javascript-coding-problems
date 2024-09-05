// Given an integer array nums, find the subarray with the largest sum  and returns it sum
// input [-2,1,-3,4,-1,2,1,-5,4] ----> OP:- 6

// input [5,4,-1,7,8] --------------> OP:- 23
// ------------------normal approach-----------------------
// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   let startIdx = 0;
//   let endIdx = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       currentSum = currentSum + nums[j];
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//         startIdx = i;
//         endIdx = j;
//       }
//     }
//   }
//   return { sum: maxSum, subArray: nums.slice(startIdx, endIdx + 1) };
// }
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//----------------------- here's a Kadane algorithm-------------
function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
