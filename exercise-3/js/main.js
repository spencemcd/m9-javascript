// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html File
document.addEventListener("DOMContentLoaded", function(event) {
  // Create a new input element
	var text_box = document.createElement("Input");
	text_box.setAttribute("type", "text");
	// Append the new input element to you DOM in the desired location
		document.getElementById("input-p").appendChild(text_box);
	// Assign a click event to your button that:
		// Creates a new paragraph of text from your input element, and:
		// Clears the text of the input element
		document.getElementById("my-btn").addEventListener("click", function() {
			var text = document.getElementsByTagName("input")[0].value;
			alert(text);
			document.getElementsByTagName("input")[0].value = "";
		});
});
