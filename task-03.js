const findLongestWord = function(string) {
let word = string.split(' ');
let wordLength = 0;
let longestWord ;
for (let i = 0; i <= word[i].length; i += 1) {
  wordLength =  word[1].length; 

if (word[i].length > wordLength) {
 longestWord = word[i];
}
}
return longestWord;
};


  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
  
  console.log(findLongestWord('Google do a roll')); 
  
  console.log(findLongestWord('May the force be with you'));