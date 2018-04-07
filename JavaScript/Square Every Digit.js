
//Square Every Digit
//Level:7kyu
/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/
function squareDigits(num){
  const numSplit = num.toString().split('')
  let result = []
  
  for (i = 0; i < numSplit.length; i++) {
    result.push(numSplit[i]*numSplit[i])        
  }
  
  return Number(result.join(''))
}

squareDigits(9119)