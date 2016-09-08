console.log("Palindrome Checker");

function isPalindrome(word) {
  var stripped = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
  var reversed = stripped.split("").reverse().join("");
  return reversed === stripped;
}
