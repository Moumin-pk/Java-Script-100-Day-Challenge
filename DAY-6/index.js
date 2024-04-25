

//  Write a function  to determine whethere a given string is a palindrome or not. A palindrome is a word, phrase, number , or other sequence of charaters that reads the same forward and backward, ignore spaces, punctuation, and capitalization.

function palindrome(str) {
  str = str.toLowerCase().replace(/\W/g, "");
  let r_str = str.split("").reverse().join("");

  if(str === r_str){
    console.log(`Yes This ${r_str} is palindrome`);
  }else console.log(`No ${r_str} is Not Palindrome`);

 
}

palindrome("RACECAR");
palindrome("RAC,.ffff....f.d.s.s..");
palindrome("hello");

