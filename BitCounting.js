/* 

Difficulty: 6kyu

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

var countBits = function(n) {
  const binaryN = n.toString(2);
  let numberOfOnes = 0;
  
  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] == 1) {
      numberOfOnes++
    }
  }
  return numberOfOnes;
};
