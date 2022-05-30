function isPalindrome(word) {
  // Write your algorithm here
  // let letters;
	// letters = Object.assign([], word);
  
  // ******idea from google******
  let re = /[\W_]g/;
  let letters = word.toLowerCase().replace(re, '');

  console.log(letters[4])
	if (letters[0] === letters[4]) {console.log('hi')}
  
  for (let i = 0; i< letters.length/2; i++) {
    if (letters[i] === letters[letters.length-1-i]) {
    return true;
    } 
    return false;    
  }
}




/* 
  Add your pseudocode here
  iterate letters of the word from the from and back
  word[0] = word[word.length-1]
  word[i] = word[word.length-1-i]
  and so on 
*/

/*
  Add written explanation of your solution here
  first, created an array which contains letters of the work given
  next, loop through the letters and compare the one from the front and the other one from the back until no letter can compare. 
  if two objects of the comparison are same, returns true. Vise versa 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
