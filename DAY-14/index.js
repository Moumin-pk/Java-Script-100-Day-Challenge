// 14 Write a function called isPowerOfTwo that takes an integer num as input and return if num is a power of two , and false otherwise.

function isPowerOfTwo(num){
  let result = false;
for(let i = 1; i<num; i++){
  if(2**i == num){
    return result = true
  }
}
return result;
}


//Example  usage: 
console.log(isPowerOfTwo(16)); // output: true
console.log(isPowerOfTwo(7)); // output: false

// Notes:

// The Input num will be a positive integer.
// Zero (0) and negative integers are not considered powers of two.
//The function ahould return true if the given number is a power of 2, and false otherwise.

// We can solve it using bitwise operator too butits your chance to do it and let me know in the comment section.
