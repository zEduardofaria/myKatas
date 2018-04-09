//Sum without highest and lowest number
//8kyu
/*  
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6


If array is empty, null or None, or if only 1 Element exists, return 0.
*/
function sumArray(array) {
  if (array && array !== [] && array.length > 1) { 
    let sum = array[0]
    let min = array[0]
    let max = array[0]
    
    for (i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i]
      } else if (array[i] > max) {
        max = array[i]
      }
      sum += array[i]
    }

    return sum - min - max 
  } else {
    return 0
  }   
}