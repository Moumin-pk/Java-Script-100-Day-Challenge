// Write aa function to calculate the sum of squares ao all elemnts in an array. for example given the array [1,2,3] the function should return 14 because 1*1 + 2*2+ 3*3 = 1+4+9 =14


function sumOfSquare(array){
  let sum = 0;

return array.reduce((acc,curr) => acc = acc + (curr * curr))

  // use foreach
// array.forEach(element => {
// sum += element * element
// });
}


//Example Usage:
console.log(sumOfSquare([1,2,3]));