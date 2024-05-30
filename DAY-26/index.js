// Write a function called repeatString that takes two parameters:

//? str: A string that needs to be repeated.
//? num: An integer representing that number of times the string should be repeated
//? The function should repeat that string str the specified number of times num and return the resulting string.

const repeatString = (str,num) => {

  return num > 0 ? str.repeat(num) : str
}


//Example usage:
console.log(repeatString('abc',5)); // output = abcabcabcabcabc

//* Constrains:
//? The input string str will contain only alphanumeric characters and punctuation marks.
//? The input number num will be a non-negative integer.
//? The output string length should not exceed the length of str multiplied by num.