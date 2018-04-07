//Simple Fun #176: Reverse Letter
//Level:7kyu
/*
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str

A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/
function reverseLetter(str) {
  return str.replace(/[\W_]/g, '').replace(/[0-9]/g, '').split('').reverse().join('');
  }