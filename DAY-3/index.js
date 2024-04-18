// Question : Count Occurrences of Charater
// --------------------------------------

// Task: 
//? Write a function called count Char that takes two parameters: a string and a charater to count. The function  should return the number of time the specified charater appears in the string.

// todo Constrains:
//? The function should be case-senstive.
//? The function should handle both lowercase and uppercase characters.

function countChar(str,char){
  str = str.toLowerCase()
  char = char.toLowerCase()
  str = str.split("")

// => 1 Method
// result = str.filter((e) => e === char)
// return `Found Character ${char} in this Time ${result.length}`
// // Found Character i in this Time 4
  

// => 2 Method
result = str.reduce((acc,str) => {
  if(str === char){
    acc++;
  }
  return acc
},0)
return result;
}
console.log(countChar('Mouminix Innovations: Crafting Quality Leather and Surgical Wonders',"n"));