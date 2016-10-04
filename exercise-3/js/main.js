// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html File
document.addEventListener("DOMContentLoaded", function(event) {
    // Create a new input element
    var input = document.createElement("input");
    input.className = "input"; // set the CSS class

    // Append the new input element to you DOM in the desired location
    var container = document.getElementById('input-p');
    container.appendChild(input);

    // Assign a click event to your button that:
    document.getElementById("my-btn").addEventListener("click", function() {

        // Creates a new paragraph of text from your input element
        var txt = document.getElementsByTagName('input')[0].value;
        var paragraph = document.createElement("p");
        var node = document.createTextNode(txt);
        paragraph.appendChild(node);
        document.getElementsByClassName('container')[0].appendChild(paragraph);

        // Clears the text of the input element
        document.getElementsByTagName('input')[0].value = '';
    });

});
