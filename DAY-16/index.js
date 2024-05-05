// coding challange : Find the Minimum Value in the Array

//16 Write a function findMin that takes an aray of number as input and return the minimin value found in the array.

//* constrains
//? The input array may contain both positive and negative integaers.
//? The input array may be empty.
//? The input array may contain duplicate values.

function findMin(arr) {
  if (arr.length == 0) {
    return `Please Enter valid Array`;
  }

  // Use Math  Min
  return Math.min(...arr)

  // use sort array
  // arr = arr.sort((a,b) => a - b)
  // return  arr[0]
}

// Example Usage
console.log(findMin([5, 10, 2, 8])); // output : 2
console.log(findMin([5, -3, 0, 12, -7])); // output : -7
console.log(findMin([])); // output : Please Enter valid Array



// Note:
//? Ensure the function handles edge cases gracefully such as an empty input array.
//? Consider using ES6 features like the spread syntax(...) for a concise implementation.

// todo In javascript, the spread syntax(...)is used to expand an array into individual elemants. In this function, ...arr is used to spread the elemnts ao the input array arr.
//? for example , if arr is [5,10,2,8], then ...are expands to 5,10,2,8.
