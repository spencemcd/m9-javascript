// Main JavaScript File

// Array to work with
var arr1 = [1,2,3,4,5];

// Write a function to subtract one from a value
function MinusOne(num){
	return num - 1;
}

// Pass each value to the subtractOne function by using the map functionality
var one_less = arr1.map(MinusOne);

// Create a array equal to arr1 times two by using the inline "map" funcitonality
var dub = arr1.map(function(num){
	return num * 2;
});

// Array of strings
var names = ['Tim', 'Nick', 'Grant'];

// Write an introduction function that takes an argument and returns "hello, I'm " + argument
function intro(name){
	return "Hello, I'm " + name;
}

// Create an array of introductions for each name
var intros = names.map(intro);
// Array of objects
var people = [
	{name:'Tim', age:22},
	{name:'Jan', age:12},
	{name:'Isabel', age:43}
];

// Use the `.forEach` method to create a new property `intro` for each object in your people array
// The property should say "My name is NAME and I'm AGE years old"
people.forEach(function(person, index){
	person.intro = "My Name is " + person.name + " and I am " + person.age + " years old";
});
