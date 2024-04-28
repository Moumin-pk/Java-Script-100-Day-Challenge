// challenge :  Calaculate the Average
// wrie a funcition called CalculateAverage that Takes an array of number as input and return the average of those numbers.

let num = [55, 20, 40, 50, 30];

// Your function should:

function calculateTheAverage(num) {
  let total = 0;

  // => 1 Method use For Loop
  // for (let i = 0; i<num.length; i++) {
  //   total = total + num[i];
  // }

  // => 2 Method use For Each Loop
  // num.forEach(element => {
  // total = total+element
  // });

  // => 3 Method Use Array reduce Method
  total = num.reduce((accum,curElem) => accum + curElem)

  return `${total / num.length}%`;
}

// Accept an array of number as input.
console.log(calculateTheAverage(num));  // output 39%
