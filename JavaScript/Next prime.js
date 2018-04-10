//Next Prime
//7kyu
/*
Description:
Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 1012

Examples
5  ==> 7
12 ==> 13
*/
function nextPrime(input){
  let counter
  input++;   
  while(true){
    counter = 0;
    for (let i = 2; i <= Math.sqrt(input); i++) {
      if(input % i == 0)  counter++
    }
    if(counter == 0 && input > 1) {
      return input    
    } else {
      input++
      continue
    }
  }
}