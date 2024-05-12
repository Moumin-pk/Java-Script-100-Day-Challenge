//* -----------------
//* Coding Challenge
//* -----------------

//19: Write a function to check if a given string with a specific substring.

// input:

//? str: A string (e.g., 'Hello World').
//? Sustr Asubdtring to check if it starts the givrn string (e.g., 'Hello').
//? outupt: true if the string with the specified sustring  otherwise false

function specificSubstring(str, substr) {
  //  convsrt to all lowercase()
  str = str.toLowerCase();
  substr = substr.toLowerCase();

  // use javascript method startsWith()
  // return str.startsWith(substr);

  // other Method
  //javacript slice() method

  return str.slice(0, substr.length) === substr;
}

// Example Usage:
console.log(specificSubstring("Hello World", "Hello")); // output : true
console.log(specificSubstring("Hello World", "World")); // output: false
