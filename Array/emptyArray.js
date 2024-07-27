// how to empty an array i
// it can be done by the following 4 approach
// 1 Assign the array to an empty array
// 2 length property
// 3 splice() method
// 4 pop() method
let array = [1, 2, 3, 4, 5, 6];
array = []
array.length = 0
array.splice(0,array.length)
while (array.length > 0) {
  array.pop();
}
console.log(array);

// in javascript is object are assigned and copied by reference not by value
