// coding challange

//? write a javascript function findMedian(arr) that takes of number as input and returns te median value . if the array has an even number of elemnets, return of the two middle values

//? For example, the edian of 3,3,5,9,15,is 5. if there is an even number of observations, then there is no single middle value: the median is then usually defined to be the mean of the two middle values: so the median of 3,5,7,9 is (5+7)/2 = 6.

//todo Tips

//? sort the array in ascending order.
//? if the array has an odd number of elemnt the median is the middle element.
//? if the array has an even number of element the median is the average of the two middle elemnts.

const findMedian = (arr) =>{ 
  // stepv1: sort the array
arr = arr.sort((a,b) => a - b)
 // step 2: check if the array length is odd or even
 let length  = arr.length;
 let mid  = Math.floor(length/2);
 if(length%2 == 0){
  // step 3 for even length array
  return (arr[mid] + arr[mid -1]) /2;
 }else{
 // step 4 for odd llength array
 return arr[mid]
 }

}


console.log(findMedian([5,3,9,1,7])); //output : 5
console.log(findMedian([2,4,6,8])); //output : 5
console.log(findMedian([1,3,5,7,9,11])); //output : 6