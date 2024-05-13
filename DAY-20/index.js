//* ---------------
//* Coding Challange
//* ---------------

//?20 Write a function  to reverse a string withput using any built-in mrthods or libraries. The function should take a string as input and retirn reversed string.

function reverseString(str){
  str = str.trim();
  let res ='';
  for(let i = str.length-1; i>=0; i--){
   res += str[i]
  }
  return res;
}

// Example Usage: 
console.log(reverseString("hello")); // output : olleh