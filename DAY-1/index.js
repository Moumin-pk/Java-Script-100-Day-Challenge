//* -----------------------------------------------
//*  ❓Programe Question: Longest Word in a String
//* -----------------------------------------------

// ==> Question:
// Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. if there are multiple longest words, return the first one encountered.

// ==> Constraints:
//? The input string may containe alphabetic characers, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

// ==> Notes:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.


const findLongestWord = (str) => {
 if(str.trim().length == 0){
  return false;
 }
 strArr = str.split(" ");
 strArr = strArr.sort((a,b) => a.length -b.length)
 result = strArr.at(-1)
 console.log(result);
}

findLongestWord("In the quiet whispers of dawn, dreams unfold like petals of possibility")


