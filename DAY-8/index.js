// Challege : Factorial Finder

// Write a function that takes a non-negative integer num as input and return its factorial. The Factirial of a non-negative integer n ,denoted as n!, is the product of akk positive integers less than or equal to n, The factorial of 0 is defined as 1.

function factorial(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}

// Here as some example of factorial calculations
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // output: 1
console.log(factorial(3));  // Output: 6
