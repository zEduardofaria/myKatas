//Remove First and Last Character
//Level:8kyu
/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 

You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/
function removeChar(str){
  var str = str.split('');
  var removedLastChar = str.pop();
  var removedFirstChar = str.shift();
  var str = str.join(''); 
  return str;
};