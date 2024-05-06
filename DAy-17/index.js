//* --------------------------------
//*  coding Challenge
//* -------------------------------
//? 16: Write a function to convert a string to camelcase & snake_case.

function toCamelCase(str) {
 arr =  str.trim().split(' ');
 arr = arr.map((curElem, index)  => {
  if(index == 0){
    return curElem.toLowerCase();
  }else{
    return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
  }
  str =arr.join()
 })

 // convert to snake_case
 return str.replace(/ /g,'_');
}

//Example usage:
console.log(toCamelCase("hello world Moumin Ahmad"));