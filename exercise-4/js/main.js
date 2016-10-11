// Load the data in data/population-2010.json (use $.get, this
// is a jquery function which we will learn more about next class).
// Information on making ajax calls in jquery:
// https://learn.jquery.com/ajax/jquery-ajax-methods/
$.get("../data/population-2010.json", function(data) {

	// Answer the following questions by writing code to find the
	// answers. Log the result of each question to your browser's
	// developer console.

	// In 2010, how many 32 year olds were women?


	// Are there more men or women who are 20?

	// Find the total percentage of men and the percentage
	// of women in the population. Round both values to
	// 2 decimal places.

	// Create a boolean array where
	// at each index the value is true if there are more women
	// of that age than men.
	//
	// For example, at index 10 the value
	// should be false because there are more men aged 10 than
	// women.
	//
	// Bonus: Try to do this without using a loop

	// Log this array to the console. Look at its contents and come
	// up with one observation about the data that this array helps
	// you to see. Make a comment of this observation.
});
