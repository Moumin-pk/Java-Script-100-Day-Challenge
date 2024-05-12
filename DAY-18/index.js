// * coding challangr

//? 17 wite a function to check if a character is uppercase or lowercase.

function isUpperCase(char) {
  if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
    return true;
  }
  return false;
}
//* constraints:
//? The input char will be singal character.
//? The Character can be any printable ASII charcater.
//? You Can assume that the input will always be a sring of length 1.

//Example usage:

console.log(isUpperCase("S",)); // output : true
console.log(isUpperCase("B")); // output : true
