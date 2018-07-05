//Sum Strings as Numbers
//Level:4kyu
/*
Given the string representations of two integers, return the string representation of the sum of those integers.
*/
function sumStrings(a, b) {
  let portionA = a === '' ? ['0'] : a.split('').reverse(),
    portionB = b === '' ? ['0'] : b.split('').reverse(),
    result = [],
    upOne = 0,
    numA,
    numB

  if (portionB.length > portionA.length) {
    const changing = portionB
    portionB = portionA
    portionA = changing
  }

  for (i = 0; i < portionA.length; i++) {
    numA = portionA[i] ? parseInt(portionA[i], 10) : 0
    numB = portionB[i] ? parseInt(portionB[i], 10) : 0

    const sum = upOne === 0 ? numA + numB : numA + numB + upOne

    upOne = 0

    if (sum > 9 && i != portionA.length - 1) {
      const sumArr = sum.toString().split('')
      upOne = parseInt(sumArr[0], 10)

      result.unshift(sumArr[1].toString())
    } else {
      result.unshift(sum.toString())
    }
  }

  return result.join('').replace(/^0+/, '')
}


