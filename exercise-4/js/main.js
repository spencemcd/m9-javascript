// Load the data in data/population-2010.json (use $.get, this
// is a jquery function which we will learn more about next class).
// Information on making ajax calls in jquery:
// https://learn.jquery.com/ajax/jquery-ajax-methods/
$.get("../data/population-2010.json", function(data) {
	// Answer the following questions by writing code to find the
	// answers. Log the result of each question to your browser's
	// developer console.

	// In 2010, how many 32 year olds were women?
	console.log("# of 32 year old women: " + data["32"].females);


	// Are there more men or women who are 20?
	if (data["20"].females < data["20"].males) {
		console.log("Men");
	} else {
		console.log("Women");
	}

	// Find the total percentage of men and the percentage
	// of women in the population. Round both values to
	// 2 decimal places.
	var total_men = 0;
	var total_women = 0;
	for (d in data) {
		total_men += data[d].males;
		total_women += data[d].females;
	}

	pct_men = (total_men / (total_women + total_men)) * 100;
	pct_women = (total_women / (total_women + total_men)) * 100;
	console.log("% males:   " + pct_men.toFixed(2) + "%");
	console.log("% females: " + pct_women.toFixed(2) + "%");

	// Create a boolean array where
	// at each index the value is true if there are more women
	// of that age than men.
	//
	// For example, at index 10 the value
	// should be false because there are more men aged 10 than
	// women.
	//
	// Bonus: Try to do this without using a loop
	var more_women = data.map(function(d) {
		return d.females > d.males;
	});

	// Log this array to the console. Look at its contents and come
	// up with one observation about the data that this array helps
	// you to see. Make a comment of this observation.
	console.log(more_women);

	// Starting at age 34 there are always more women.

});

