// Write a funtion that takes a number and returns the sum of its digits.

function addNumber(num) {

// convert to array
let arr = Array.from(String(num),Number)

let sum = arr.reduce((acc,cur) => {
return  acc + cur;
},0)
return sum;
}

  

console.log(addNumber(1234)); // output is : 10
console.log(addNumber(1234787878)); //output is : 55
console.log(addNumber(123434343)); //output is : 27
