// Define variables with different values
const name = "Gautam";
const booleanFalse = false;
const booleanTrue = true;
const stringNumber = "1";
const numberZero = 10;
const undefinedValue = undefined;

// Check if each variable is NaN and log the result
console.log(`isNaN("${name}"):`, isNaN(name)); // true
console.log(`isNaN(${booleanFalse}):`, isNaN(booleanFalse)); // false
console.log(`isNaN(${booleanTrue}):`, isNaN(booleanTrue)); // false
console.log(`isNaN("${stringNumber}"):`, isNaN(stringNumber)); // false
console.log(`isNaN(${numberZero}):`, isNaN(numberZero)); // false
console.log(`isNaN(${undefinedValue}):`, isNaN(undefinedValue)); // true

// resason behind it are
// isNaN("Gautam")
// "Gautam" is a string that is not a valid number.
// Explanation
// Type Coercion: isNaN() first tries to convert the argument to a number. In this case,
//  "Gautam" is converted to NaN because it's not a valid numeric value.

// Result: Since "Gautam" cannot be converted to a number, isNaN("Gautam") returns true,
// indicating that "Gautam" is indeed not a number.

// isNaN(10)
// 10 is a numeric value.
// Explanation
// Type Coercion: isNaN() directly checks if 10 is NaN. Since 10 is a number and not NaN, it returns false.

// Result: Since 10 is a valid number and not NaN, isNaN(10) returns false.
