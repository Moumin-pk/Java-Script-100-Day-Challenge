// Write a function findMax that takes an array of numbers as input and return the maximum number in the array.

function findMax(array){
  let max = Math.max(...array)
  console.log(`The Maximun Value is ${max}`);
}

//Example Usage

findMax([1,10,30,49,50,79,59]);   // The Maximun Value is 79
findMax([19999,12220,33330,4778789]); // The Maximun Value is 4778789
findMax([-1,-10,0,-49,-79,-59]);  // The Maximun Value is 0
