/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/

/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/

let myname = 'TrondM'
let nameLast = 'Reknes'
let age = 27
let isStudent = true

let fullname = myname + " " + nameLast

const array = [fullname, age, isStudent]

/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

let number = 2
let numberTwo = 3
let numberOne = 4

let sum = number + numberTwo - numberOne
console.log(sum)

let x = 10
console.log(x)
x = x + 5
console.log(x)
x += 3
console.log(x)
x++
console.log(x)
/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

let userName = "Dera";
let userAge = 27;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";
let userMale = true;

if (userName !=="" && userAge >= 18 && !userIsBlocked) {
    userIsLoggedIn = true;
    goToPage ='/home';
    console.log('Howdy!');
} else {
    console.log ('Nah bruh');
}

/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userTitle = userMale ? "Mr." : "Mrs.";
console.log(`User Title: ${userTitle}`);

// i didn't quite understand what you ment so i gave the actual title above in task 4. this way i could make the function and actually test it.
