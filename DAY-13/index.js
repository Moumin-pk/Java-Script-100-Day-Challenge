// Write a function that takes a string as input and retirn the count of cowels in that string . consider 'a','e','i','o', and 'u' as vowel (both lowercase and uppercase)/

function countvowels(str) {
  let vowel = ['a','e','i','o','u']
  let count = 0;
  // string convert to array
  arr = str.split("");

  arr.forEach((elem) => {
    if (vowel.includes(elem.toLowerCase())) {
      count++;
    }
  });

  return `length of vowels ${count}`;
}

//Example usage:
console.log(countvowels("Hello world")); //output : length of vowels 3
console.log(countvowels("The quick brown fox")); // length of vowels 5
console.log(countvowels("Brrp")); // length of vowels 0

// constraints:
// The input string may contain letters in both uppercase and lowercase.
//The output should be a non-negative integer representing the count of vowels in the input string.
