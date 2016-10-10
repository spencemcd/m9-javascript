$.get("../data/population-2010.json", function(data) {
	console.log(data);
	for (d in data) {
		console.log(data[d]);
	}
});