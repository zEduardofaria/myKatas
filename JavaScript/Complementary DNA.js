
//Complementary DNA
//Level:7kyu
/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

DNAStrand ("ATTGC") # return "TAACG"

DNAStrand ("GTAT") # return "CATA"
*/
function DNAStrand(dna){
  const strToArr = dna.split('');
  for (i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === "A") {
      strToArr[i] = "T";
    } else if (strToArr[i] === "T") {
      strToArr[i] = "A";
    } else if (strToArr[i] === "C") {
      strToArr[i] = "G";
    } else if (strToArr[i] === "G") {
      strToArr[i] = "C";
    }  
  }
  return strToArr.join('')
}