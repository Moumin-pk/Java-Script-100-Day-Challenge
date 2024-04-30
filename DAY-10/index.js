// Write a function arraysAreEqual that takes two arrays arr1 and arr2 are input and return true if the arrays are equal (i.e., contain the same elements in the same order), and false othrewise.

// Check Length of Array
function arraysAreEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  // Use For Each loop

  // let isEqual = true;
  // arr1.forEach((curValue,index) => {
  // if(curValue !== arr2[index]){
  //   isEqual = false
  // }
  // })
  // return isEqual;

  // Use Every Method

  return arr1.every((curElem, index) => curElem === arr2[index]);
}
// Exapmle usage:
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // false
console.log(arraysAreEqual([], [])); // true

//Notes

// The function should return false if the arrays have diffrent lengths.
//The function should compare each element of arr1 with the corresponding element in arr2.
//The function should return true only if all elemnts in arr1 are equal to thir corresponding elements in arr2.
