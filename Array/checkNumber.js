console.log(Number.isInteger(120)); //true
Number.isInteger(0); //true
Number.isInteger(0 / 0); //false
Number.isInteger(0.5); //false
Number.isInteger(false); //false
Number.isInteger(NaN); //false
Number.isInteger(Infinity); //false
Number.isInteger(-Infinity); //false
// Number.isInteger() is an ECMAScript6 (ES6) feature.
// An integer is a whole number that can be positive, negative, or zero but must not have a fractional part.
// Non-integers: Numbers with a fractional part (e.g., 0.5, 3.14)
// Special Values: NaN, Infinity, -Infinity, true, false, and any other non-numeric types are not considered integers.
