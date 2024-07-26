// write a js program to get the fibonacci sequence of the given number
// it is the sequence of in which each number is the sum of two precedin number
// example 0,1,1,2,3,5,8,13

function fibonaciiSequence(numbers) {
  // if the number is 0 or negative then print empty array
  if (numbers <= 0) {
    return [];
  }
  //   now here we are initializing the the fibonacci with first 2 numbers
  let sequence = [0, 1];

  //   now generating the fibonaccii sequence
  for (let i = 2; i < numbers; i++) {
    let nextFibbo = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextFibbo);
  }
  return sequence;
}
console.log(fibonaciiSequence(10));
