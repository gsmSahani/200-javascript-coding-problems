function add(a, b) {
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}
console.log(add(10, 20));

// it can be done by bitwise AND (&) to find the carry bits.
// it can be done by bitwise XOR (^) to add the numbers without carrying.
// It shifts the carry bits left (<<) and adds them back to the result until there are no more carry bits left.
// it converts the decimal to binary and binary to decimal

// 10=1010 , 20=10100 by adding them 10100+1010=11110 now 11110 is converted to decimal value 30
// 1*2^4...... like this
