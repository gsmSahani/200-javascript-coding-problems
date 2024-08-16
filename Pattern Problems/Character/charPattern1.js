function printPattern() {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index = 0;
  let rows = 5;

  for (let i = 0; i < rows; i++) {
    let line = "";
    for (let j = 0; j < rows - i; j++) {
      line += alphabet[index] + "";
      index++;
    }
    console.log(line.trim());
  }
}
printPattern();
