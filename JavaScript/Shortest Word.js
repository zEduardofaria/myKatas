//Shortest Word
//Level:7kyu
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
  var words = s.split(' ');
   var minLength = 1000;
 
   for (var i = 0; i < words.length; i++) {
     if (words[i].length < minLength) {
       minLength = words[i].length;
     }
   }
 
   return minLength;
 }