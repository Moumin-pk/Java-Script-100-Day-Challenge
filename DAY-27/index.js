// Truncate a String

//* Write a function called truncatedstring that takes two parameters:

//? str : A string that needs to be truncated.
//? maxlength: An integer representing the maximum length of the string allowed.
//? The function should truncated the input  string if its  length exceeds the specified maxlength. if truncation occurs, the function should add '....' to the end of the truncated string.

function truncateString(str,count) {
  
return count <= 0 ? str : str.slice(0,count).concat('...');

}

//Example 
console.log(truncateString("A-tisket a-tasket A green and yellow basket",8)); // output: A-tisket...

console.log(truncateString("A-tisket a-tasket A green and yellow basket",0)); // output: A-tisket a-tasket A green and yellow basket


//* Constraints
//? The input string str will contain only alphanumerical  charaacters and punctuation marks.
//?  The maximum length maxlength will be a positive
//? The output string length should not exceed maxlength + 3 characters due to the addition of '...'.