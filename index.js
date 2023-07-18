function isPalindrome(word) {
  // Write your algorithm here
  // Reverse the word and compare it to the original word
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;

}

/* 
  Add your pseudocode here
  FUNCTION isPalindrome(word):
    reversedWord = REVERSE(word)  // Reverse the word

    IF word is equal to reversedWord:
        RETURN true  // The word is a palindrome
    ELSE:
        RETURN false  // The word is not a palindrome

*/

/*
  Add written explanation of your solution here
  1.  The isPalindrome function takes a word as input.
2.  It creates a reversedWord by reversing the characters in the word.
3.  It then checks if the word is equal to the reversedWord.
4.   If the word and reversedWord are the same, it means the word is a palindrome, so the function returns true.
5.  If the word and reversedWord are different, it means the word is not a palindrome, so the function returns false.
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
