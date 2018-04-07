
//Alternate case
//Level:7kyu
/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/
function alternateCase(s) {
  const str = s.split('');

  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c == c.toLowerCase()) {
      str[i] = c.toUpperCase();
    } else {
      str[i] = c.toLowerCase();
    }
  }
  return str.join('');
}