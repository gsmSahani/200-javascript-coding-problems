// write a js program to generate random hex color
function generateRandHexColor() {
  const hexColor = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hexColor[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(generateRandHexColor());
