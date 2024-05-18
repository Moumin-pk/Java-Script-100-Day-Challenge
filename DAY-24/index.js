//* ---------------
//* coding challenge
//* ---------------

//* Write a function to calculate the factorial of a number.cusing Recursion

// Recursion:
//? Recursion is a programing technique where a function calls itself in order to solve a problem. In essence , It's a function taht calls itself with smaller or simple input until it reaches a base case.

//* Base Case:

//?  The base case is the condition in a recursive function that stops the recursion. it's the point at which the function stops calling itself and return a vlue without further recursion. eithout a base case, the recursive fund=ction would continue calling itself indefinitely , loading to what's knpw infinite recursion.

//*REcursivw case:
//? The recursive case is the condition in a recursive function thaet determins when the functon should call itself again.it's tpyically n expression or condition taht evlnate to true for certain inputs, indicating that further recursing is necessary to solve the problrm . each recursive call should move closer to the base case, eventually loadiing to termination of the recursion.

//example usage:

const factorial = (num) => {
  if(num == 1){
    return 1;
  }else{
    return num * factorial(num-1)
  }
}

console.log(factorial(5));  // output : 120
