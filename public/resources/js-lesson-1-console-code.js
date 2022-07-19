/***
**** MAIN SECTION:
**** CONSOLE DEMOS
***/

/*
** Exercise 1
*/
// Basic calculations
10 + 5
14 - 2
8 * 8
15 / 3

// Basic text manipulation
"Hello"
'Hello'
`Hello`
Hello
"Hello" + "world"
"Hello " + "world"

// Storing and retrieving information
var luckyNumber = 8
luckyNumber

// Alert and prompt
alert("Hello there")
prompt("What is your name?")
var guestName = prompt("What is your name?")
guestName

// Null and undefined
var descendantName = prompt("What is your great great granddaughter's name?") // Click 'cancel'
descendantName // null
var missingName
missingName // undefined

/*
** Exercise 2
*/
// Getting references to elements on the page and accessing their contents
var usernameInput = document.getElementById("usernameInput")
usernameInput
usernameInput.value // Enter a few different values in username input and check this updates
var usernameCaption = document.getElementById("usernameCaption")
usernameCaption
usernameCaption.innerText
var missingElement = document.getElementById("nonexistentId")
missingElement // null

// Different ways of building longer strings out of shorter parts
var usernameAvailableMessage = "Great news! The username " + usernameInput.value + " is available."
usernameAvailableMessage
var usernameUnavailableMessage = `Sorry, the username ${usernameInput.value} is already taken.`
usernameUnavailableMessage

// Setting the contents of elements on the page
usernameCaption.innerText = usernameAvailableMessage
usernameCaption.innerText = usernameUnvailableMessage

/*
** Exercise 3
*/
// (Setup - getting more references to elements on the page)
var passwordInput = document.getElementById("passwordInput")
passwordInput
var passwordCaption = document.getElementById("passwordCaption")
passwordCaption

// Comparing numbers
passwordInput.value
passwordInput.value.length
passwordInput.value.length < 8 // Check with a few different values in the password box
passwordInput.value.length <= 8
passwordInput.value.length > 3
passwordInput.value.length >= 3

// Choosing whether to take actions based on a condition
if (passwordInput.value.length < 8) {
    passwordCaption.innerText = "Your password needs to be at least 8 characters long."
}

// Specifying different actions to take based on whether or not a condition is satisfied
if (passwordInput.value.length < 8) {
    passwordCaption.innerText = "Your password needs to be at least 8 characters long."
} else {
    passwordCaption.innerText = ""
}

/*
** Exercise 4
*/
// (Setup - getting more references to elements on the page)
var confirmPasswordInput = document.getElementById("confirmPasswordInput")
confirmPasswordInput
var confirmPasswordCaption = document.getElementById("confirmPasswordCaption")
confirmPasswordCaption

// Checking whether values are equal
passwordInput.value
confirmPasswordInput.value
passwordInput.value === confirmPasswordInput.value // Check with a few different values
passwordInput.value !== confirmPasswordInput.value // Check with a few different values

// Choosing whether to take actions based on a condition
if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordCaption.innerText = "Your passwords don't match."
}

// Specifying different actions to take based on whether or not a condition is satisfied
if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordCaption.innerText = "Looks good!"
} else {
    confirmPasswordCaption.innerText = "Your passwords don't match."
}

/*
** Exercise 5
*/
// (Setup - getting more references to elements on the page)
var ageInput = document.getElementById("ageInput")
ageInput
var ageCaption = document.getElementById("ageCaption")
ageCaption

// Boolean values (true or false)
ageInput.checked

// Using boolean values in if/else statements directly
if (ageInput.checked) {
    ageCaption.innerText = "You're good to go!"
} else {
    ageCaption.innerText = "You must be at least 13 to play."
}

/***
**** BONUS SECTION:
**** EXTENDED EXERCISE
***/

/*
** Exercise 6
*/
// Storing lists of information
var usersList = ["emily", "jane", "kim"]
usersList.length
usersList

// Retrieving individual pieces of information from lists
usersList[0]
usersList[1]
usersList[2]
usersList[3] // undefined

// Choosing whether to take actions based on a condition
if (usernameInput.value === usersList[0]) {
    usernameCaption.innerText = `Sorry, the username ${usernameInput.value} is already taken.`
}
if (usernameInput.value === usersList[1]) {
    usernameCaption.innerText = `Sorry, the username ${usernameInput.value} is already taken.`
}
if (usernameInput.value === usersList[2]) {
    usernameCaption.innerText = `Sorry, the username ${usernameInput.value} is already taken.`
}
usernameCaption.innerText = ""

// Sequential tasks
alert(5)
alert(4)
alert(3)
alert(2)
alert(1)
alert("Go!")

// Automating sequential tasks using a while loop
var i = 5
while (i > 0) {
    alert(i)
    i = i - 1
}
alert("Go!")

// Automating sequential tasks using a for loop
for (var i = 5; i > 0; i = i - 1) {
	alert(i)
}
alert("Go!")

// Automating previous multi-if-statement task
for (var i = 0; i < usersList.length; i = i + 1) {
    if (usernameInput.value === usersList[i]) {
        usernameCaption.innerText = `Sorry, the username ${usernameInput.value} is already taken.`
    }
}

// An if/else solution using booleans
var usernameMatchFound = false
for (var i = 0; i < usersList.length; i = i + 1) {
    if (usernameInput.value === usersList[i]) {
        usernameMatchFound = true
    }
}
if (usernameMatchFound) {
    usernameCaption.innerText = `Sorry, the username ${usernameInput.value} is already taken.`
} else {
    usernameCaption.innerText = `Great news, the username ${usernameInput.value} is available!`
}