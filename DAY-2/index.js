// -------------------------------------------------
//  Programing Question: Hash Tag Generator🔥
// -------------------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a given input string.? The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag formate, where each word is capitalized and concatenated together without spaces.
//? if the length of the input strng is greater than 280 charaters or if the input string is empty or contains only witespace, the function should return false.

//? otherwise, the function should return the generated hash tag prefixed with #.

//* write a function generateHash to accomplish this task.


function hastagGenerater(str){
if(str.trim().length == 0 || str.length > 280){
  return false
}
str = str.split(" ")
str = str.map((elem) =>elem.replace(elem[0],elem[0].toUpperCase()))
str = `#${str.join("")}`
console.log(str);
// output of the followig code is #MyNameIsMouminAhmad
}
console.log(hastagGenerater(`my name is moumin ahmad`));