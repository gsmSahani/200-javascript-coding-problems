let str = "My name is Gautam Sahani";
// console.log(str.split(""));
/*[
    'M', 'y', ' ', 'n', 'a',
    'm', 'e', ' ', 'i', 's',
    ' ', 'G', 'a', 'u', 't',
    'a', 'm', ' ', 'S', 'a',
    'h', 'a', 'n', 'i'
  ]
  */
// console.log(str.split()); //[ 'My name is Gautam Sahani' ]
// console.log(...str); //M y   n a m e   i s   G a u t a m   S a h a n i
// console.log([str]); //[ 'My name is Gautam Sahani' ]

// using split() it will convert the string into single array and if we use "" quote inside the split("")
// like this it will break down single letter into an single array

// replace any character
// console.log(str.replace("Gautam", "Shambhu")); //My name is Shambhu Sahani

// get substring from string
// The substring methods extract character between two indices (positions) from a string and return the substrin
// basically it extract the character from the string from start to end but here end position in not included
// console.log(str.substring(0,5)) //my na

// Remove the last character from the string
// these both method are used to remove the last character form  the string slice is the new method
// slice does not change the original array and it does not include the end array while splicing
// console.log(str.substring(5, str.length - 5));
// console.log(str.slice(0, -2));



// remove the first character
// console.log(str.slice(11))


// remove string before specific character

