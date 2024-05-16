// Write a javascript function to count the accurrences of each elemnt in an array and store the counts in an object. The keys of the object shoukd represent the elements of the array, and the values should represent the number of times each elemnt appears in the array.

// Here's what the function should do:

//Accept an array of numbers as input.

// Create an empty  object called count to store the count of each elemnt.
//Iterate through each number in the array.
// for each number increment the count in the counts object
// if the count for a number does not exist yet, initialize it to 1.
// Return the counts object containing the counts of each elemnt.

// input
const number = [1, 2, 2, 3, 1, 4, 2];
let count = {};

for (let num of number) {
  count[1] = (count[num] || 0) + 1;
}

console.log(count);
//output: {'1':2,'2':3,'3':1,'4':1}


