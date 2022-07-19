/***
**** MAIN SECTION:
**** CONSOLE DEMOS
***/

/*
** Exercise 1:
** - Store nameInput and nameCaption in variables
** - Write an if/else statement to display an error if nameInput is empty
--
** Concepts:
** - Recap
**    + Interacting with HTML elements
**    + Variables
**    + Data types (string, number, boolean)
**    + Comparing values
**    + If/else statements
*/
var nameInput = document.getElementById("nameInput")
nameInput
var nameCaption = document.getElementById("nameCaption")
nameCaption

// Checking whether nameInput is empty or not
nameInput.value
nameInput.value !== "" // String comparison
nameInput.value.length > 0 // Numeric comparison

// If nameInput's value is empty, display an error
if (nameInput.value === "") {
    nameCaption.innerText = "Please enter your name to make a booking"
} else {
  	nameCaption.innerText = ""
}

/*
** Exercise 2:
** - Store emailInput and emailCaption in variables
** - Use a for loop to check whether the inputted email contains a single @ symbol
** - Display an error if there isn't exactly one @ symbol
--
** Concepts:
** - Recap
**    + For loops
**    + Square bracket [] notation for selecting items at a particular position in a list
**    + String interpolation using backticks ``
** - Using square bracket [] notation with strings (as well as arrays)
** - Incrementation: using i++ notation instead of i = i + 1
** - Using console.log to write specific statements to the console output
** - Chaining conditions using && (and) and || (or)
*/
var emailInput = document.getElementById("emailInput")
emailInput
var emailCaption = document.getElementById("emailCaption")
emailCaption

emailInput.value
emailInput.value[0] // Character at index 0 (1st character)
emailInput.value[1] // Character at index 1 (2nd character)

// Write inside the console whenever an @ symbol is found, including its location in the string
for (var i = 0; i < emailInput.value.length; i = i + 1) {
    if (emailInput.value[i] === "@") {
        console.log(`@ symbol found at index ${i}`)
    }
}

// Shorthand ++ for incrementing a counter variable (also works with -- for decrementing)
var i = 1; console.log(i) // 1
i = i + 1; console.log(i) // 2
i = i + 4; console.log(i) // 6
i++; console.log(i) // 7
i++; console.log(i) // 8

// Keep a count of the number of @ symbols in the string, and display an error if the final count isn't 1
var atSymbolCount = 0
var email = emailInput.value
for (var i = 0; i < email.length; i++) {
    if (email[i] === "@") {
        atSymbolCount++
    }
}
if (email !== "" && atSymbolCount !== 1) {
    emailCaption.innerText = "Please ensure the email address you entered is valid"
} else {
    emailCaption.innerText = ""
}

/*
** Exercise 3:
** - Store newsAndOffersInput and newsAndOffersCaption in variables
** - Display an error if the user wants news and offers but didn't enter an email address
** - Use a function to display an error if the user wants news/offers but didn't enter a *valid* email address
--
** Concepts:
** - Functions
**    + Writing functions
**    + Function returns
**    + Running (calling) functions
**    + EXTENSION: Function scope
*/
var newsAndOffersInput = document.getElementById("newsAndOffersInput")
newsAndOffersInput
var newsAndOffersCaption = document.getElementById("newsAndOffersCaption")
newsAndOffersCaption

newsAndOffersInput.checked

// Check if the user wants news and offers but forgot to enter an email address
if (newsAndOffersInput.checked && emailInput.value === "") {
    newsAndOffersCaption.innerText = "Please enter an email address to receive news and offers"
} else {
    newsAndOffersCaption.innerText = ""
}

// Check if a particular email address satisfies our rules
// EXTENSION: currently, the only check is for the number of @ symbols. Can you think of more conditions?
function isValidEmail(email) {
    var atSymbolCount = 0
    for (var i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            atSymbolCount++
        }
    }
    return atSymbolCount === 1
}

isValidEmail("") // false
isValidEmail("a@b.com") // true
isValidEmail("a@b@c.com") // false
isValidEmail(emailInput.value) // Try this out with a few different values inside emailInput

// Display an error if the user wants news and offers but didn't enter a valid email address
if (newsAndOffersInput.checked && !isValidEmail(emailInput.value)) {
    newsAndOffersCaption.innerText = "Please enter a valid email address to receive news and offers"
} else {
    newsAndOffersCaption.innerText = ""
}

/*
** Exercise 4:
** - Store phoneInput and phoneCaption in variables
** - Use a function to display an error if the user didn't enter a valid UK phone number
--
** Concepts:
** - Practice
**    + Writing and using simple functions
**    + Chaining conditions using && (and)
** - EXTENSION: External JavaScript libraries
** - EXTENSION: Regular expressions (regex)
*/
var phoneInput = document.getElementById("phoneInput")
phoneInput
var phoneCaption = document.getElementById("phoneCaption")
phoneCaption

phoneInput.value

// Version 1: check if the phone number is 11 characters long
function isValidPhoneNumber(phoneNumber) {
	return phoneNumber.length === 11
}

isValidPhoneNumber("0") // false
isValidPhoneNumber("01234567890") // true
isValidPhoneNumber("11234567890") // true (version 1)

// Version 2: check if the phone number is 11 characters long and starts with a 0 digit
// EXTENSION: can you use a for loop to detect any non-numeric characters? Can you think of more conditions?
function isValidPhoneNumber(phoneNumber) {
	return phoneNumber.length === 11 && phoneNumber[0] === "0"
}

isValidPhoneNumber("01234567890") // true
isValidPhoneNumber("11234567890") // false (version 2)
isValidPhoneNumber("0zzzzzzzzzz") // true (version 1 and version 2 as currently written)
isValidPhoneNumber(phoneInput.value) // Try this out with a few different values inside phoneInput

// Display an error if the user didn't enter a valid UK phone number
if (!isValidPhoneNumber(phoneInput.value)) {
    phoneCaption.innerText = "Please enter a valid UK phone number"
} else {
    phoneCaption.innerText = ""
}

/*
** Exercise 5:
** - Store numAdultsInput, numChildrenInput and numGuestsCaption in variables
** - Write a function to return a suitable error message depending on the values in the guest inputs
** - Use this function to display an error if the user didn't enter a valid, suitable number of guests
--
** Concepts:
** - Converting digit strings to numbers using parseInt
** - Checking if parseInt couldn't convert a particular string to a number using isNaN (is Not a Number)
** - Adding more possible options into if/else statements using *else if*
*/
var numAdultsInput = document.getElementById("numAdultsInput")
numAdultsInput
var numChildrenInput = document.getElementById("numChildrenInput")
numChildrenInput
var numGuestsCaption = document.getElementById("numGuestsCaption")
numGuestsCaption

numAdultsInput.value // string
numChildrenInput.value // string
numAdultsInput.value + numChildrenInput.value // For 2 adults and 1 child, this displays "21"

parseInt(numAdultsInput.value) // number
parseInt(numChildrenInput.value) // number
parseInt(numAdultsInput.value) + parseInt(numChildrenInput.value) // For 2 adults and 1 child, this displays 3

// Version 1: check if the number of guests is greater than 6
function getNumGuestsCaption(numGuests) {
    if (numGuests > 6) {
        return "Please contact us by phone to arrange a booking for more than 6 guests"
    } else {
        return ""
    }
}

getNumGuestsCaption(8) // Too many guests caption
getNumGuestsCaption(parseInt("5")) // Empty caption
getNumGuestsCaption(parseInt("")) // Empty caption (version 1)

// Version 2: check if the number of guests is invalid or greater than 6
// EXTENSION: can you add checks for negative or non-whole numbers of guests? Can you think of more conditions?
function getNumGuestsCaption(numGuests) {
    if (isNaN(numGuests)) {
        return "Please enter a valid number of adults and children for the booking"
    } else if (numGuests > 6) {
        return "Please contact us by phone to arrange a booking for more than 6 guests"
    } else {
        return ""
    }
}

getNumGuestsCaption(8) // Too many guests caption
getNumGuestsCaption(parseInt("5")) // Empty caption
getNumGuestsCaption(parseInt("")) // Invalid number of guests caption (version 2)

var numGuests = parseInt(numAdultsInput.value) + parseInt(numChildrenInput.value)
numGuestsCaption.innerText = getNumGuestsCaption(numGuests)

/*
** Exercise 6:
** - Create a function to update newsAndOffersCaption using the if/else statement from exercise 3
** - Use this function to update newsAndOffersCaption whenever newsAndOffersInput is checked or unchecked
--
** Concepts:
** - The difference between running a function straight away and passing a it around to be run later
** - Listening for events on particular HTML elements
*/

// Wrap the if/else statement from exercise 3 in a function
function updateNewsAndOffersCaption() {
    if (newsAndOffersInput.checked && !isValidEmail(emailInput.value)) {
        newsAndOffersCaption.innerText = "Please enter a valid email address to receive news and offers"
    } else {
        newsAndOffersCaption.innerText = ""
    }
}

updateNewsAndOffersCaption() // Try this out with the bottom part of the form in different states
updateNewsAndOffersCaption // Without the brackets (), we can see our function without running it

// Listen for change events on newsAndOffersInput and run updateNewsAndOffersCaption whenever one occurs
newsAndOffersInput.addEventListener("change", updateNewsAndOffersCaption)

/***
**** BONUS SECTION:
**** LINKED JS FILE DEMOS
***/

/*
** Exercise 7:
** - Create a folder for the Pasta Hut site on your own computer, with linked HTML and JS files
** - Move the functionality tested so far in the console into the new JS file
** - Add functionality to update all form captions at once when the user clicks the form submit button
--
** Concepts:
** - Creating files
** - Linking to JavaScript files from within HTML files using <script></script> tags
** - Adapting code to ensure specific tasks are carried out at the correct times
*/

// FIRST PART OF EXERCISE (setting up and linking the site's HTML and JS files on your computer)
// Step 1: make a new folder on your computer for your site's files (example name: pasta-hut)
// Step 2: open Visual Studio Code (also referred to as VS Code or VSCode)
// Step 3: open your new (empty) folder inside VS Code
// Step 4: create a new HTML file for your site's HTML code (example name: index.html)
// Step 5: create a new JS file for your site's JS code (example name: form-checker.js)
// Step 6: copy the HTML file code from the appropriate resource into your new HTML file
// Step 7: add the following script tag near the bottom of your HTML file,
//         immediately above the closing </body> and </html> tags:
//         <script src="form-checker.js"></script>
//         (if you used a filename other than form-checker.js, ensure you type that filename instead)
// Step 8: add the following JS code in your new JS file:
//         alert("Hello")
// Step 9: open your HTML file in your browser and check that the alert appears

// SECOND PART OF EXERCISE (moving functionality into JS file)
// Step 1: delete the alert from your JS file so that it is empty again
// Step 2: copy the JS file code from the appropriate resource into your JS file
// Step 3: reload your browser and test the functionality by submitting the form in different states

// THIRD PART OF EXERCISE (updating all form captions upon click of form submit button)
// ** This part is covered at the end of the JS code from the link above
// ** Try to understand the code, and using your new skills, see if you can recode it yourself