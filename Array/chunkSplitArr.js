function splitChunkArr(arr, size) {
  if (size < 0) {
    throw new Error("Chunk size must be greater than 0")
  }

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 2;
console.log(splitChunkArr(arr, chunkSize));
