//This makes comments in js, you can also make comments the same way as CSS//
//Brackets in JS have to match, you cannot cross brackets. Sublime will underline matched brackets//
//() when parsing a comment/argument. {} when sectioning off a bit of code//
//If there is an error in JS, check the developer tools in console//
//Camel case naming convention in JS - e.g. slideToggle()//
//; in js is the same as a .//
//Text is put in " " or ' ' quotes so js knows it is a block of text not a command. Single or double is fine but not mixed//
//true and false are only used in relation to boolean commands//
//js can convert data types between string and numbers e.g. parseInt//
//NaN = not a number, error in js//
//undefined is a type of data, not defined is an error//
// || or operator && and operator. Case comparisons are case sensitive//
// variables can store data, functions can store bits of code//
// .on looking for an event on the page//
// .attr in jquery allows you to change any attribute - learn.jquery.com//

function askQuestions () {

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName + ' ' + lastName;
console.log(fullName);

if (firstName === 'General' && lastName !== 'Assembly') {
	console.log("Greetings General!");
} else {
	console.log("Greetings " + fullName + "!");
}

var faveColour = prompt('What is your favourite colour?').toLowerCase();

if (faveColour === 'red' ||
	faveColour === 'blue' ||
	faveColour === 'green' ||
	faveColour === 'yellow') {
	
	$('h1').css('color', faveColour);

	}

var age = prompt('How old are you?');
age = parseInt(age);

if (age >= 18) {
	console.log('User is an adult');
} else if (age >=13) {
	console.log('User is a teenager');
} else {
	console.log('User is a child');
}

$('h2').text(firstName + ' is ' + age + ' years old!');

}

//When the page loads//
$(function() {

	$('img').on('click', askQuestions);

	//When the user clicks a heading//
	$('h3').on('click', function() {

		//Hide the content after the heading//
		$(this).next().slideToggle(1500);

	});

});