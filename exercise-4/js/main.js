// Load the data in data/population-2010.json (use $.get, this
// is a jquery function which we will learn more about next class).
// Information on making ajax calls in jquery:
// https://learn.jquery.com/ajax/jquery-ajax-methods/
$.get("../data/population-2010.json", function(data) {

	// Answer the following questions by writing code to find the
	// answers. Log the result of each question to your browser's
	// developer console.
	
	// In 2010, how many 32 year olds were women?
	console.log(data["32"].females);

	// Are there more men or women who are 20?
	if(data["20"].males > data["20"].females){
		console.log("More men than woman who are 20");
	} else {
		console.log("More woman than men who are 20");
	}
	// Find the total percentage of men and the percentage
	// of women in the population. Round both values to
	// 2 decimal places.
	var entries = Object.keys(data).length;
	var num_men = 0;
	var num_women = 0;
	for(i in data){
		num_men += data[i].males;
		num_women += data[i].females;
	}
	console.log("" + num_men + " " + num_women);
	var perc_men = ((num_men / (num_men + num_women)) * 100).toFixed(2);
	var perc_women = 100 - perc_men;
	console.log("percentage men: " + perc_men + " percentage women: " + perc_women);
	
	// Create a boolean array where
	// at each index the value is true if there are more women
	// of that age than men.
	//
	// For example, at index 10 the value
	// should be false because there are more men aged 10 than
	// women.
	//
	// Bonus: Try to do this without using a loop
	var arr = data.map(function(currElement){
		return currElement.males < currElement.females;
	});
	console.log(arr);
	// Log this array to the console. Look at its contents and come
	// up with one observation about the data that this array helps
	// you to see. Make a comment of this observation.
	//More men than wmen at younger ages
});
