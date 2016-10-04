# Module 9: JavaScript

## Overview
As you know, all visual elements on a webpage are HTML elements, styled using CSS: JavaScript is what will bring those elements to life. JavaScript is a **scripting language** used to process data, create/manipulate HTML elements, and assign events (i.e, click, hover, etc.) to those elements. The vast majority of the code you will write in this course will be JavaScript, and you should feel confident in your functional programming skills in the language.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Contents**

- [Resources](#resources)
- [Getting Started](#getting-started)
- [Variables](#variables)
  - [Numbers and Strings](#numbers-and-strings)
  - [Arrays](#arrays)
  - [Objects](#objects)
  - [Functions](#functions)
  - [Properties and Methods](#properties-and-methods)
- [Variable Scope](#variable-scope)
- [Array Manipulation](#array-manipulation)
- [DOM Manipulation](#dom-manipulation)
  - [Waiting for Content to Load](#waiting-for-content-to-load)
- [Events](#events)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Resources
Here are some helpful resources to help guide your exploration of JavaScript:

- [JavaScript Array Methods](http://www.w3schools.com/jsref/jsref_obj_array.asp)
- [JavaScript DOM Methods](http://www.w3schools.com/js/js_htmldom_methods.asp)
- [List of DOM Events](http://www.w3schools.com/jsref/dom_obj_event.asp)
- [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) for adding event listeners
- [JavaScript Scope](http://www.w3schools.com/js/js_scope.asp) (_w3schools_)
- [JavaScript Scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/) (_awesome blog post_)

## Getting Started
JavaScript, a scripting language, differs substantially from markup languages such as HTML. Using JavaScript, you'll create variables that **are not** represented in the DOM. This will allow you to process data, apply conditional logic (i.e., `if/else` statements), and assign behaviors to elements that you select from your page. For small applications, you may see JavaScript written directly in a `<script>` tag of an `index.html` file:

```html
<!-- index.html file -->
<!DOCTYPE html>
  <head>
    <script>
      // JavaScript code gets written in here. Comments begin with two slashes (//)
    </script>
  </head>
  <body>
    ...content...
  </body>
```

However, it is a better practice to isolate your JavaScript code into another file, which you can read into your `index.html` file:

```html
<!-- index.html file -->
<!DOCTYPE html>
  <head>
    <script type="text/javascript" src="js/my-script.js"></script>
  </head>
  <body>
  </body>
```


## Variables
Like other scripting languages, JavaScript allows you to store information inside of variables you create. JavaScript is **loosely typed**, so there is no need to specify the type of variable you wish to create. To specify the creation of a variable, use the `var` keyword (see below). By convention, each line of JavaScript code ends with a semicolon (`;`):

### Numbers and Strings
There is only one type of _number_ in JavaScript, on which you can easily perform mathematical operations.

```javascript
// Create a numeric variable `x`
var x = 13;

// Use the value of `x` to calculate another variable `y`
var y = x * 2;
```

String variables are created by setting a variable equal to a set of characters encapsulated in either single or double quotes:

```javascript
// Create a string variable `str` using quotes (single or double quotes are both fine)
var str = "hello there";

// Concatenate two strings together using the `+` sign
var sentence = str + ', Jim';
```

To determine the `type` of variable that you're working with, you can pass it to the `typeof` function:
```javascript
// Store the character "5" in a string variable
var string5 = "5";

// Determine variable type
typeof(string5); // returns "string"
```

### Arrays
In JavaScript, _arrays_ allow you to store collections of information within the same variable. Arrays are one-dimensional vectors that may contain elements of different types. Arrays are created by placing a series of comma-separated elements within two square brackets (`[]`). Array elements are **indexed** using their position, starting at 0.
```javascript
// Create a variable `arr` that stores an array of values (which may be of different types)
var arr = [13, 'fourteen', 15];

// Access array elements by their index, starting at 0:
arr[0]; // returns 13

```

### Objects
In JavaScript, _objects_ are a set of key-value pairs used to store information. Objects are declared by placing comma-separated key-values pairs (`key:value`) inside of curly braces (`{}`).

```javascript
var myTable = {
  legs:4,
  type:"wooden",
  length:11
};
```
As you can see, each `key` is a _string_ that allows you to reference a corresponding value. _Values_ may be elements of any type. Note, objects can be _**nested**_, which is to say that the _value_ of a _key_ may itself be an object (which is less confusing than it sounds):
```javascript
// Create an object of key-values pairs -- note, these may be nested
var person = {
  name:'steve',
  favorites:{
    music:'bluegrass',
    foods:['pizza', 'salad', 'yogurt']
  }
};

// Access object values using their key-values
person.name; // returns 'steve'
person['name']; // also returns 'steve'
person.favorites; // returns the full `favorites` objects
person.favorites.foods; // returns ['pizza', 'salad', 'yogurt']
person.favorites.foods[1]; // returns 'salad', the first element in the 'foods' array
```

### Functions
As in other programming languages, functions are executable blocks of code that accept **arguments** (parameters), and return a single element (though that element may be of any _type_). There are _many_ functions already built into JavaScript for you to use. Functions are executed by writing the function name, followed by passing arguments into the parenthesis:

```javascript
// Get typeof an element
typeof(5); // returns "number"

// Get the square-root of a number:
Math.sqrt(100); // returns 10

// Generate a random number: no arguments are required
Math.random();
```
As you may have guessed, `Math` is an _object_ that stores functions in key-value pairs.

In addition to using pre-defined functions, you can write your own. Functions are written using the `function` keyword, followed by a series of **arguments** inside of parenthesis (`()`). Following the arguments, the executable block of function code is placed between curly-braces (`{}`). The final line of the function uses the `return` keyword to _return_ a value:


```javascript
// Create a function that takes in a value and returns that values times two
var timesTwo = function(value) {
  return value * 2;
};

// Execute your function, passing in the value 3:
timesTwo(3); // returns 6
```

### Properties and Methods
JavaScript objects have _**properties**_ and _**methods**_:

>**Properties**: describe a feature of an object, such as it's length.

>**Methods**: actions that an object can perform, such as push an element into an array.

Here are some brief examples for accessing properties/methods:

```javascript
// Create an array of data
var data = [1, 2, 3];

// Determine how many observations are in the dataset using the `length` property
var num_obs = data.length;

// Add a new observation into the array of data using the `push` method
data.push(4); // data is now [1, 2, 3, 4]

// Use the filter methods to determine which numbers are greater than 2
var greater_than_two = data.filter(function(d){return d>2 });

// Note: data is unchanged, and filter took a `function` as it's parameter.  
```

To practice accessing information via object properties, and leveraging different object methods, see [exercise-1](exercise-1).

## Variable Scope
When working with JavaScript, it is very important to understand the **scope** of your variables. In JavaScript, `scope` refers to the context of your variable. For example, is it defined everywhere (`global`) or just within a function (`local`). When you create a variable outside of any functions, that variable has `global` scope, and is accessible within any of your code:

```javascript
// Globally created variable: can reference it anywhere
var data = [1, 2, 3];
```
However, if you create a variable **within a function**, it will only be accessible within that function (or child functions):

```javascript
// Globally created variable: can reference it anywhere
var data = [1, 2, 3];

// Processing data function
var process_data = function(){
  // Local scope: Variables created in here are not accessible outside of this function
  var len = data.length;

  // Internal function: `len` will be accessible
  var additional_processing = function() {
    // You can access `len` within internal functions
  };
};

// len is not accessible here: "Uncaught ReferenceError: len is not defined"
console.log(len);
```

This [blog-post](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/) is much more robust explanation of the topic, and you should seek it out ~~if~~ when you run into scoping problems.  

## Array Manipulation
Perhaps the most common data structure you will work with is the `array`. For example, when you read in a `.csv` file into your program, each row is typically interpreted as an element in an array. Note, each one of those elements in the `array` is an `object`, with the key-value pairs representing the columns and values of the `.csv` file.

A common task when working with arrays is to iterate through each element and pass that element into a function. For example, you may be adding a point to a map for each element in an array. While you could write a loop, this can also accomplished using the `map` method:

```javascript
// Array of numbers
var arr = [1,2,3,4,5];

// Function to return a value plus three
var plusThree = function(num) {
  return num + 3;
};

// Pass each element in `arr` to the `plusThree` function
var threeLarger = arr.map(plusThree);

// This also could be done via an anonymous function
var threeLarger = arr.map(function(num){
  return num + 3;
});

```

Note, this is similar to the `forEach` method, but the `forEach` method **does not** return a value. To practice accessing information via object properties, and leveraging different object methods, see [exercise-2](exercise-2).

## DOM Manipulation
This is all well and good, but what does JavaScript have to do with your webpage? Similarly to how you can select elements using CSS, you can select elements from your DOM using JavaScript. This will enable you to **get**, **add**, **change**, and **remove** elements from your webpage. In [module-10](https://github.com/info343c-a16/m10-jquery), we'll introduce the `jQuery` library that provides a much more succinct syntax for accomplishing the same tasks. Under the hood, libraries such as `jQuery` and `d3` library leverages the same processes, so it's important to understand what's happening (even if you will _rarely_ use the native JavaScript syntax):

```javascript
// Set the innerHTML property of the element with id "demo"
document.getElementById("demo").innerHTML = "Hello World!";

// Create a new element
var btn = document.createElement("button");  // Create an empty <button> element
var t = document.createTextNode("Click");    // Create a text node, which you'll append to the button
btn.appendChild(t);                          // Append the text to <button>
document.body.appendChild(btn);              // Append <button> to <body>

// Remove an element
var parent = document.getElementById("div1"); // Select parent by id
var child = document.getElementById("p1");    // Select child by id
parent.removeChild(child);                    // Remove child from parent
```

### Waiting for Content to Load
If you read in your JavaScript file in the `<head>` section, it will (by default) run before the elements in your body are created. This can become an issue if your JavaScript file attempts to select elements created in your `index.html` file (because they will not yet have been created). Not to worry -- you can simply wait for your elements to be loaded before the code executes (you should wrap all of your code inside of this function):

```javascript
document.addEventListener("DOMContentLoaded", function(event) {
  //do work
});
```

This looks a little nicer using the `jQuery` library, which will be covered in [module-10](https://github.com/info343c-a16/m10-jquery):

```javascript
$( document ).ready(function() {
  // Handler for .ready() called.
});

// Or even more concisely:
$(function() {
  // Handler for .ready() called.
});
```

## Events
In addition to manipulating DOM elements, JavaScript enables you to assign dozens of [events](http://www.w3schools.com/jsref/dom_obj_event.asp) to your webpage. Events are the set of actions that a user can perform on your webpage such as keyboard or mouse actions, touch gestures, and many more. Any html element can register an event: in other words, any component on your page can trigger a function when it is acted upon. Events can be assigned via different html attributes in their html tags:

```html
<button onclick="alert('hello')">Click me</button>
```

Note, the `onclick` event is assigned a JavaScript function, which is executed when it registers the event (i.e., when someone clicks on it). You, of couse, can assign your own JavaScript functions to click events:

```html
<!-- your index.html file which has read in the javascript below -->
<button onclick="myFunction()">Click me</button>
```

```javascript
// JavaScript file that is read into your webpage
var myFunction = function() {
  // run your code here
};
```


While it's useful to assign events within you html file, it may be more flexible to assign these events dynamically from your JavaScript file. Because you can select and change elements from you DOM, it's easy to assign events to your elements:

```javascript
var myFunction = function() {
  // code that you want to be executed
};
document.getElementById("myBtn").onclick = myFunction;
```
Again, this will become more succinct when we start using the jQuery library. To practice assigning different event listeners, see [exercise-3](exercise-3).
