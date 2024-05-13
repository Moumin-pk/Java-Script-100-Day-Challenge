//*-------------------------
//*---- coding Challenge ---
//*-------------------------

//? Wrute a function called calculateMen that takes an array of number as input and returns the mean (average) of those numbers.


function calculateMean(arr){
if(arr.length === 0){
  return 0;
}

let sum = arr.reduce((acc,curr) =>  acc = acc+curr) 
return sum/arr.length;
}

// today in math , the mean is the average of set of number , or the numeric value that represents the center of a collection of numbers.

//? Constraints:
//? The input array may ontain positive and negative integers.
//? The input array may be empty. if it is empty, the function should return 0.


console.log(calculateMean([1,2,3,4,5])); // output: 3
console.log(calculateMean([10,20,30])); // output: 20
console.log(calculateMean([-1,0,1])); // output: 0
console.log(calculateMean([])); // output: 0