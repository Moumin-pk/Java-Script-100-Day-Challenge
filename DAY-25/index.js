//* ----------------------
//* Coding Challange
//* ----------------------

//* Write a function to find the nth Fibonacci number.


//? The Fibonacci series is a sequrnce of number  in which eah number(Fibonacci number) is the sum of the two preceding ones. it statrs with 0cand 1 and the subsequrnt number by adding the last two mumber. so the Fibonacci series  looks like this : 0,1,1,2,3,4,8,13,21, ....

// today Fiboncci number is calculated using the following formula: today syntax : f(n)  = f(n-1) + f(n-2), where , f(1) = f(2) = 1.

const Fibonacci  =(num) => {
if (num <= 1){
  return num;
}else{
  return Fibonacci(num -1)+Fibonacci(num-2);
}
}
// Example usage:
console.log(Fibonacci(0));  // output : 0
console.log(Fibonacci(1));  // output : 1
console.log(Fibonacci(2));  // output : 1
console.log(Fibonacci(3));  // output : 2
console.log(Fibonacci(2));  // output : 1
console.log(Fibonacci(5));  // output : 5