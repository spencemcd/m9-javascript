// Main JavaScript File

// String variable
var str = "this is a sentence";

// Use the length property to see how many characters are in your `str` variable
var length = str.length;
// Use the `toUpperCase` method to create a new variable `STR` that has the `str` value, but all UPPPERCASE.
var STR = str.toUpperCase();
// Use the "split" method create a new variable `words` that is an array of the component words of `str`
var words = str.split(" ");
// Use the length property to see how many words are in your `words` array
var word_length = words.length;
// Write a function that returns the number of words in a string
function Words(w) {
	var arr = w.split(" ");
	return arr.length;
}
// Pass a string to your function to determine that it works
var ftest = Words(str);
// Write a function to test if a string contains a word, and returns a boolean value.
function ContainWord(str, w) {
	var temp = str.indexOf(w);
	return (temp != -1);
}
// Pass a phrase and a string to your function to determine that it works
var works = ContainWord("Hello How are You", "How");
