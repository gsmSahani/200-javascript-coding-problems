const num1 = [4, 9, 9, 5];
const num2 = [9, 4, 9, 8, 4];
const interSection = num1.filter((currEle) => {
  return num2.includes(currEle);
});
console.log([...new Set(interSection)]);
