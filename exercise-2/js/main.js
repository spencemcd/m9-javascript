// Main JavaScript File

// Array to work with
var arr1 = [1, 2, 3, 4, 5];

// Write a function to subtract one from a value
var subtractOne = function(value) {
    return (value - 1);
};

// Pass each value to the subtractOne function by using the map functionality
var oneLess = arr1.map(subtractOne);

// Create a array equal to arr1 times two by using the inline "map" funcitonality
var timesTwo = arr1.map(function(d) {
    return d * 2;
});

// Array of strings
var names = ['Tim', 'Nick', 'Grant'];

// Write an introduction function that takes an argument and returns "hello, I'm " + argument
var intro = function(name) {
    return ("hello, I'm " + name);
};

// Create an array of introductions for each name
var intros = names.map(intro);

// Array of objects
var people = [{
    name: 'Tim',
    age: 22
}, {
    name: 'Jan',
    age: 12
}, {
    name: 'Isabel',
    age: 43
}];

// Use the `.forEach` method to create a new property `intro` for each object in your people array
// The property should say "My name is NAME and I'm AGE years old"
people.forEach(function(d) {
    d.intro = "My name is " + d.name + " and I'm " + d.age + " years old.";
});
