

// Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type pf triangel : "equilateral", "isosceles", or "scalene".



// todo The function should adhere to the following rules.
//? if all three sides are of equla length, return "equilateral"
//? If only two sides are of equal length, return "isosceles"
//? if all three sides have different length, return "Scalene"


function checkTriangleType(a,b,c){
if(a === b && b === c) return "triangle"
if(a === b || b === c || c === a) return "isosceles"
return "scalene"
}

console.log(checkTriangleType(1,2,7)); // scalene
console.log(checkTriangleType(3,3,3)); // triangle
console.log(checkTriangleType(3,6,3)); // isosceles