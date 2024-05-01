// 12: Write a function that takes an array of integers as input and removes any duplicate elements , returning a new array with only the unique elements.


function removeDuplicates(arr){
  let newArr = [...new Set(arr)]
  return newArr;
}


// Example usage: 
console.log(removeDuplicates([1,2,3,2,1,4])); // output : [1,2,3,4]
console.log(removeDuplicates([5,6,7,7,8,8,9])); // output : [5,6,7,8,9]


// The new set( method in javascript creates a new set object . A Set object is a collection of unique values. IT can store any type of values , whether primitive values or object refrences.

// Constrains:

//The input array may contain both positive and negative integers.
//The input array may be empty.
//The elemnt in the input array are not guaranteed to be sorted.
//The output arrays should retain the orginal order of elemnts from the input arrays.

